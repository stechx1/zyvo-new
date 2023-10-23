import { NextResponse } from 'next/server';
const axios = require('axios');

export async function POST(req, res) {
  if (req.method === 'POST') {
    const body = await req.json();
    const { email, firstName } = body; // Assuming you have collected email and first name

    try {
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

      return new NextResponse('User subscribed to Mailchimp', { status: 200 });
    } catch (error) {
      console.error('Error subscribing to Mailchimp', error);
      return new NextResponse('Error subscribing to Mailchimp', { status: 500 });
    }
  } else {
    console.log('Use POST');
  }
}
