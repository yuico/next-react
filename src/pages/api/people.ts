import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

const authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  return await fn(req, res)
}

export default authenticated(async function getPeople(req: NextApiRequest, res: NextApiResponse) {
  const db = await sqlite.open('./mydb.sqlite');
  const people = await db.all('select id, email, name from Person')

  res.json(people);
})