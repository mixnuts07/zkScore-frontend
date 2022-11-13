import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('zkScore-API: Get for reputations is called.');
  const { query: { evaluatee_id }, method, } = req
  if (method !== 'GET') {
    console.log('fail to get');
    res.status(405).end(`Method ${method} Not Allowed`)
  }
  const url = `https://tokyoweb3zkscore-api.azurewebsites.net/reputations?code=${process.env.NEXT_JS_ZKSCORE_API_KEY}&evaluatee_id=${evaluatee_id}`;
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
