import { Response as NextResponse } from 'next';
import axios from 'axios';

export async function POST(req, res) {
  if (req.method === 'POST') {
    const body = await req.json();
    const { email, firstName, lastName } = body;

    try {
      // Access environment variable directly
      const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API;
      const listId = 'a63d2e77c7'; // Corrected listId

      const mailchimpResponse = await axios.post(
        `https://us21.api.mailchimp.com/3.0/lists/${listId}/members`,
        {
          email_address: email,
          status: 'subscribed',
          "merge_fields": {
            "FNAME": firstName,
            "LNAME": lastName,
          },
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
