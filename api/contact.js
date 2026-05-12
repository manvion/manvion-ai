const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { JWT } = require('google-auth-library');

const app = express();
app.use(cors());
app.use(express.json());

async function appendToSheet(row) {
    let client_email = process.env.GOOGLE_CLIENT_EMAIL;
    let private_key = process.env.GOOGLE_PRIVATE_KEY;

    if (!client_email || !private_key) {
        try {
            const creds = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');
            client_email = creds.client_email;
            private_key = creds.private_key;
        } catch (e) {
            throw new Error('GOOGLE_CREDENTIALS is not valid JSON: ' + e.message);
        }
    }
    if (!client_email) throw new Error('GOOGLE_CREDENTIALS parsed but client_email field is missing or empty');

    private_key = private_key.replace(/\\n/g, '\n');

    const auth = new JWT({
        email: client_email,
        key: private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const { token } = await auth.getAccessToken();
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [row] })
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Sheets API ${res.status}: ${text}`);
    }
}

app.post('*', async (req, res) => {
    const { name, email, company, service, message } = req.body || {};
    let sheetSaved = false;
    let emailSent = false;
    let sheetError = null;
    let emailError = null;

    try {
        await appendToSheet([name, email, company, service, message, new Date().toISOString()]);
        sheetSaved = true;
    } catch (err) {
        sheetError = err.message;
        console.error('Sheets error:', err.message);
    }

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
