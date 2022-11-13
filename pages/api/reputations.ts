import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('zkScore-API: Post for reputations is called.');
  const url = `https://tokyoweb3zkscore-api.azurewebsites.net/reputations?code=${process.env.NEXT_JS_ZKSCORE_API_KEY}`;
  const { method } = req
  if (method !== 'POST') {
    res.status(405).end(`Method ${method} Not Allowed`)
  }
  const responce = await fetch(url, {
    method: 'POST',
    body: req.body
  });
  const json = await responce.json();
  if (responce.ok) {
    console.log('success to register');
    console.debug(json);
    res.status(200).json(json);  
  }
  else {
    console.log('fail to register');
    console.debug(json);
    res.status(400).json(json);
  }
}
