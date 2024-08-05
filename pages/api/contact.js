/* eslint-disable import/no-anonymous-default-export */
export default async function handler(req, res) {
  require('dotenv').config({ path: `${__dirname}/../../Collections/.env` });

  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });


  const mailData = {
    from: process.env.SENDER,
    to: process.env.TO,
    subject: `Message From Portfolio Website`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Phone: ${req.body.phone}</p><p>Message: ${req.body.message}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
