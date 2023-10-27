import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const { email, firstName } = body;

    try {
      const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API;
      const listId = 'a63d2e77c7';

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

      return res.status(200).json({ message: 'User subscribed to Mailchimp' });
    } catch (error) {
      console.error('Error subscribing to Mailchimp', error);
      return res.status(500).json({ message: 'Error subscribing to Mailchimp' });
    }
  } else {
    return res.status(405).end('Method Not Allowed');
  }
}
