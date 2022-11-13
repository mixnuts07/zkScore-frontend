import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('zkScore-API: Get for userid is called.');
  const { query: { wallet_address }, method, } = req
  if (method !== 'GET') {
    console.log('fail to get');
    res.status(405).end(`Method ${method} Not Allowed`)
  }
  const url_root = `https://tokyoweb3zkscore-api.azurewebsites.net`;
  const url = `${url_root}/userid?code=${process.env.NEXT_JS_ZKSCORE_API_KEY}&wallet_address=${wallet_address}`;
  const responce = await fetch(url);
  const json = await responce.json();
  if (responce.ok) {
    console.log('success to get');
    console.debug(json);
    res.status(200).json(json);  
  }
  else {
    console.log('fail to get');
    console.debug(json);
    res.status(400).json(json); 
  }
}
