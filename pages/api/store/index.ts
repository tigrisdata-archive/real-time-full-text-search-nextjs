import type { NextApiRequest, NextApiResponse } from "next";
import { Product, products } from "../_products";
import { Products } from "../../../db/models/store";
import tigrisDB from "../../../lib/tigris";

type Response = {
  result?: Array<Products>;
  error?: string;
};


async function loadData(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const productsCollection = tigrisDB.getCollection<Products>(Products);
    const inserted = await productsCollection.insertMany(products);
    console.log(inserted);
    res.status(200).json({ result: inserted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function fetchAll(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const productsCollection = tigrisDB.getCollection<Product>(Products);
    const cursor = productsCollection.findMany();
    const products = await cursor.toArray();
    res.status(200).json({ result: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
  ) {
    switch (req.method) {
      case "GET":
        await fetchAll(req, res);
        break;
      case "POST":
        await loadData(req, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }