import express from 'express';
import { createTransport } from 'nodemailer';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;


app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all origins


const transporter = createTransport({
    service: 'Gmail',
    auth: {
        user: 'bhnitin198@gmail.com',
        pass: 'PLANET!74',
    },
});

// API endpoint to handle sending emails
app.post('/api/messages', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'bhnitin198@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            return res.json({ message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});