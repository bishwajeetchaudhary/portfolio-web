const { Resend } = require('resend');

const resend = new Resend(process.env.API_RESEND);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    console.log('Received form data:', { name, email, msg });
    console.log('Environment variables:', {
      fromEmail: process.env.FROM_EMAIL,
      toEmail: process.env.TO_EMAIL,
      apiKey: process.env.API_RESEND ? 'Set' : 'Not set'
    });

    //validation
    if (!name || !email || !msg) {
      console.log('Validation failed: Missing required fields');
      return res.status(500).send({
        success: false,
        message: 'Please provide all the fields',
      });
    }

    console.log('Attempting to send email...');
    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: "New Contact Form Submission - Portfolio",
      html: `
        <h4>Contact Form Details</h4>
        <ul>
          <li><p>Name: ${name}</p></li>
          <li><p>Email: ${email}</p></li>
          <li><p>Message: ${msg}</p></li>
        </ul> 
      `
    });

    console.log('Email sent successfully:', data);
    return res.status(200).send({
      success: true,
      message: 'Your Message Send Successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    let errorMessage = 'Failed to send email';
    if (error.statusCode === 403) {
      errorMessage = 'Email sending permission denied. Please check API key and domain verification.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    return res.status(500).send({
      success: false,
      message: errorMessage
    });
  }
};

module.exports = { sendEmailController };