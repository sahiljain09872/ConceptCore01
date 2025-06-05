const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Email transport configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email || 'no-reply@example.com',
    to: process.env.EMAIL_RECEIVER,
    subject: subject || 'New Contact Form Submission',
    text: `
      Name: ${name || 'N/A'}
      Email: ${email || 'N/A'}
      Phone: ${phone || 'N/A'}
      Message: ${message || 'N/A'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;
