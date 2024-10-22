const nodemailer = require('nodemailer');

const sendEmail = async (recipientEmail, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can also use services like SendGrid, Mailgun, etc.
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS,  // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,   // Sender's email
      to: recipientEmail,             // Recipient's email
      subject: subject,               // Email subject
      text: message,                  // Plain text message (you can also use HTML here)
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipientEmail}`);
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
  }
};

module.exports = { sendEmail };
