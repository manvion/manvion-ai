const nodemailer = require('nodemailer');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

let docInitPromise = null;

async function initDoc() {
    try {
        const creds = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');
        if (!creds.client_email) throw new Error('GOOGLE_CREDENTIALS missing');
        creds.private_key = creds.private_key.replace(/\\n/g, '\n');
        const auth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const d = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
        await d.loadInfo();
        return d;
    } catch (err) {
        console.warn('Google Sheets unavailable:', err.message);
        return null;
    }
}

function getDoc() {
    if (!docInitPromise) docInitPromise = initDoc();
    return docInitPromise;
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).end();

    const { name, email, company, service, message } = req.body;
    let sheetSaved = false;
    let emailSent = false;

    // Save to Google Sheet
    const doc = await getDoc();
    if (doc) {
        try {
            const tab = doc.sheetsByIndex[0];
            await tab.loadHeaderRow().catch(() => null);
            if (!tab.headerValues || tab.headerValues.length === 0) {
                await tab.setHeaderRow(['Name', 'Email', 'Company', 'Service', 'Message', 'Date']);
            }
            await tab.addRow({ Name: name, Email: email, Company: company, Service: service, Message: message, Date: new Date().toISOString() });
            sheetSaved = true;
            console.log('Lead saved to sheet.');
        } catch (err) {
            console.error('Sheets error:', err.message);
        }
    }

    // Send email
    const MY_EMAIL = process.env.MY_EMAIL || '';
    const MY_APP_PASSWORD = process.env.MY_APP_PASSWORD || '';
    if (MY_EMAIL.includes('@')) {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: { user: MY_EMAIL, pass: MY_APP_PASSWORD }
            });
            await transporter.sendMail({
                from: `"Manvion Lead Engine" <${MY_EMAIL}>`,
                to: MY_EMAIL,
                replyTo: email,
                subject: `🚨 NEW LEAD: ${service} — ${company}`,
                text: `New lead from Manvion.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`
            });
            emailSent = true;
            console.log('Lead email sent.');
        } catch (err) {
            console.error('Email error:', err.message);
        }
    }

    if (sheetSaved || emailSent) {
        return res.status(200).json({ success: true, message: 'Lead captured successfully.' });
    }
    return res.status(500).json({ error: 'Failed to save lead. Check Vercel env vars.' });
};
