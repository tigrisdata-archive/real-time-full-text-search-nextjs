import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "../../../db/models/store";
import tigrisDb from "../../../lib/tigris";
import { SearchQuery } from "@tigrisdata/core";

type Data = {
  result?: Array<Products>;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query, page } = req.query;
  try {
    const productCollection = tigrisDb.getCollection<Products>(Products);
    const searchRequest: SearchQuery<Products> = { q: query as string };
    const results = await productCollection.search(
      searchRequest,
      Number(page) || 1
    );
    const products = new Array<Products>();
    for (const hit of results.hits) {
      products.push(hit.document);
    }
    res.status(200).json({ result: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
