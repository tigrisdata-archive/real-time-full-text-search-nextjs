import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../db/models/store";
import { tigrisDB } from "../../../lib/tigris";

type FetchAllResponse = {
  result?: Array<Product>;
  error?: string;
}

async function fetchAll(res: NextApiResponse<FetchAllResponse>) {
  try {
    const productsCollection = tigrisDB.getCollection<Product>(Product);
    const cursor = productsCollection.findMany();
    const products = await cursor.toArray();
    res.status(200).json({ result: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<FetchAllResponse>
  ) {
    switch (req.method) {
      case "GET":
        await fetchAll(res);
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }