const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.API_RESEND);

async function testEmail() {
  try {
    console.log('Sending test email...');
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'Test Email from Portfolio',
      html: '<p>This is a test email to verify the Resend configuration.</p>'
    });
    console.log('Email sent successfully:', data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

testEmail();