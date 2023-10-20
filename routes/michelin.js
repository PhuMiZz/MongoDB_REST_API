import express from 'express';
import db from '../config/database.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
  let limit = Number(req.query.limit) || 5;
  let collection = await db.collection('michelin');
  let results = await collection.find({}).limit(limit).toArray();
  res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let collection = await db.collection('michelin');
  let query = { _id: new ObjectId(id) };
  let result = await collection.findOne(query);

  if (!result) {
    res.send('No result found').status(404);
  } else {
    res.send(result).status(200);
  }
});

export default router;
