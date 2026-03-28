const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

const upload = multer({ storage: multer.memoryStorage() });
const app = express();
app.use(cors());
app.use(express.json());

// ==========================================
// GOOGLE SHEETS — lazy init per serverless instance
// ==========================================
let docInitPromise = null;

async function getDoc() {
    if (!docInitPromise) docInitPromise = initDoc();
    return docInitPromise;
}

async function initDoc() {
    try {
        const creds = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');
        if (!creds.client_email) throw new Error('GOOGLE_CREDENTIALS env var missing or invalid.');

        // Vercel stores env vars as plain strings — fix escaped newlines in private key
        creds.private_key = creds.private_key.replace(/\\n/g, '\n');

        const auth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const d = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
        await d.loadInfo();
        console.log(`✅ Google Sheet connected: [${d.title}]`);
        return d;
    } catch (err) {
        console.warn('⚠️ Google Sheets unavailable:', err.message);
        return null;
    }
}

// ==========================================
// EMAIL SETUP
// ==========================================
const MY_EMAIL = process.env.MY_EMAIL || '';
const MY_APP_PASSWORD = process.env.MY_APP_PASSWORD || '';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: MY_EMAIL, pass: MY_APP_PASSWORD }
});

// ==========================================
// POST /api/contact
// ==========================================
app.post('/api/contact', async (req, res) => {
    const { name, email, company, service, message } = req.body;

    let sheetSaved = false;
    let emailSent = false;

    // Save to Google Sheet
    const sheet = await getDoc();
    if (sheet) {
        try {
            const tab = sheet.sheetsByIndex[0];

            // Set headers if sheet is blank
            await tab.loadHeaderRow().catch(() => null);
            if (!tab.headerValues || tab.headerValues.length === 0) {
                await tab.setHeaderRow(['Name', 'Email', 'Company', 'Service', 'Message', 'Date']);
            }

            await tab.addRow({
                Name: name,
                Email: email,
                Company: company,
                Service: service,
                Message: message,
                Date: new Date().toISOString()
            });
            sheetSaved = true;
            console.log('Lead saved to Google Sheet.');
        } catch (err) {
            console.error('Google Sheets write error:', err.message);
        }
    }

    // Send email
    if (MY_EMAIL.includes('@')) {
        try {
            await transporter.sendMail({
                from: `"Manvion Lead Engine" <${MY_EMAIL}>`,
                to: MY_EMAIL,
                replyTo: email,
                subject: `🚨 NEW LEAD: ${service} — ${company}`,
                text: `New lead from Manvion.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`
            });
            emailSent = true;
            console.log('Lead email delivered.');
        } catch (err) {
            console.error('Email error:', err.message);
        }
    }

    if (sheetSaved || emailSent) {
        return res.status(200).json({ success: true, message: 'Lead captured successfully.' });
    }
    return res.status(500).json({ error: 'Failed to save lead. Check env vars in Vercel dashboard.' });
});

// ==========================================
// POST /api/apply
// ==========================================
app.post('/api/apply', upload.single('resume'), async (req, res) => {
    const { name, email, role } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'Resume file is required.' });
    }

    if (!MY_EMAIL.includes('@')) {
        return res.status(500).json({ error: 'Email not configured.' });
    }

    try {
        await transporter.sendMail({
            from: `"Manvion ATS Engine" <${MY_EMAIL}>`,
            to: MY_EMAIL,
            subject: `🔥 New Application: ${role} — ${name}`,
            text: `New application for ${role}.\n\nName: ${name}\nEmail: ${email}\n\nResume attached.`,
            attachments: [{ filename: file.originalname, content: file.buffer }]
        });
        return res.status(200).json({ success: true, message: 'Application received.' });
    } catch (err) {
        console.error('Apply email error:', err.message);
        return res.status(500).json({ error: 'Failed to send application.' });
    }
});

module.exports = app;
