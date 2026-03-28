const nodemailer = require('nodemailer');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        });
    });
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).end();

    await runMiddleware(req, res, upload.single('resume'));

    const { name, email, role } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ error: 'Resume file is required.' });

    const MY_EMAIL = process.env.MY_EMAIL || '';
    const MY_APP_PASSWORD = process.env.MY_APP_PASSWORD || '';
    if (!MY_EMAIL.includes('@')) return res.status(500).json({ error: 'Email not configured.' });

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: MY_EMAIL, pass: MY_APP_PASSWORD }
        });
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
};

module.exports.config = { api: { bodyParser: false } };
