const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const app = express();
app.use(cors());
app.use(express.json());

let docInitPromise = null;
function getDoc() {
    if (!docInitPromise) docInitPromise = initDoc();
    return docInitPromise;
}
async function initDoc() {
    try {
        const creds = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');
        if (!creds.client_email) throw new Error('GOOGLE_CREDENTIALS missing');
        creds.private_key = creds.private_key.replace(/\\n/g, '\n');
        const d = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
        await d.useServiceAccountAuth({
            client_email: creds.client_email,
            private_key: creds.private_key
        });
        await d.loadInfo();
        console.log('Google Sheet connected:', d.title);
        return d;
    } catch (err) {
        console.warn('Google Sheets unavailable:', err.message);
        return null;
    }
}

app.post('*', async (req, res) => {
    const { name, email, company, service, message } = req.body || {};
    let sheetSaved = false;
    let emailSent = false;
    let sheetError = null;
    let emailError = null;

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
        } catch (err) {
            sheetError = err.message;
            console.error('Sheets error:', err.message);
        }
    } else {
        sheetError = 'GOOGLE_CREDENTIALS or GOOGLE_SHEET_ID missing/invalid';
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
                subject: `NEW LEAD: ${service} - ${company}`,
                text: `New lead from Manvion.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`
            });
            emailSent = true;
        } catch (err) {
            emailError = err.message;
            console.error('Email error:', err.message);
        }
    } else {
        emailError = 'MY_EMAIL env var missing';
    }

    if (sheetSaved || emailSent) {
        return res.json({ success: true, message: 'Lead captured successfully.' });
    }
    return res.status(500).json({
        error: 'Both delivery methods failed.',
        sheet: sheetError,
        email: emailError
    });
});

module.exports = app;
