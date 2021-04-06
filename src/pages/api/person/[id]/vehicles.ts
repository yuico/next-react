import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllVehiclesByPersonById(req: NextApiRequest, res: NextApiResponse) {
  const db = await sqlite.open('./mydb.sqlite');
  const vehicles = await db.all('select * from vehicle where ownerid = ?', [req.query.id])
  res.json(vehicles)
}