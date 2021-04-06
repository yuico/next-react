import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getPeople(req: NextApiRequest, res: NextApiResponse) {
  const db = await sqlite.open('./mydb.sqlite');
  const people = await db.all('select id, email, name from Person')

  res.json(people);
}