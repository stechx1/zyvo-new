import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
const axios = require('axios');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export async function POST(req, res) {
  if (req.method === 'POST') {
    const body = await req.json();
    const { email, firstName } = body; // Assuming you have collected email and first name

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: email,
      subject: 'Welcome to the Zyvo Universe!',
      text: 'Thank you for signing up for our app. We are excited to have you on board!',
      html: `<!-- Your email content here -->`,
    };

    try {
      // Send the welcome email
      await transporter.sendMail(mailOptions);

      // Subscribe the user to Mailchimp
      const apiKey = '81d72bba2bda26144daf5d8f1c815739-us21'; // Your MailChimp API key
      const listId = 'a63d2e77c7'; // Your MailChimp List ID

      const mailchimpResponse = await axios.post(
        `https://us21.api.mailchimp.com/3.0/lists/${listId}/members`,
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: { FNAME: firstName },
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      // Handle the response from Mailchimp
      console.log(mailchimpResponse.data);

      return new NextResponse('Welcome email sent and user subscribed to Mailchimp', { status: 200 });
    } catch (error) {
      console.error('Error sending welcome email or subscribing to Mailchimp', error);
      return new NextResponse('Error sending welcome email or subscribing to Mailchimp', { status: 500 });
    }
  } else {
    console.log('Use POST');
  }
}
