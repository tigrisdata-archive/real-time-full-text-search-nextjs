// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product, products } from './_products'
import { Products } from '../../db/models/store'
import tigrisDB from '../../lib/tigris'

type Response = {
  result?: Array<Products>;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {

    const productsCollection = tigrisDB.getCollection<Products>(Products);
    const inserted = await productsCollection.insertMany(products);
    console.log(inserted)
    res.status(200).json({ result: inserted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
