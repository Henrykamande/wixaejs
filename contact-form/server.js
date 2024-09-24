const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (optional, if you have any)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // use your email service provider
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'info@franmarengineering.co.ke', // your receiving email address
        subject: subject,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
   
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ success: false, message: 'Error sending message.' });
            }
            res.status(200).json({ success: true, message: 'Message sent successfully!' });
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
