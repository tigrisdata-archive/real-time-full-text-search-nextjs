import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../db/models/products";
import { tigrisDB } from "../../../lib/tigris";
import { SearchQuery } from "@tigrisdata/core";

type Data = {
  result?: Array<Product>;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query, page } = req.query;
  try {
    const productCollection = tigrisDB.getCollection<Product>(Product);
    const searchRequest: SearchQuery<Product> = {
      q: query as string,
      sort: [
        {
          field: "star",
          order: "$desc",
        },
      ],
    };
    const results = await productCollection.search(
      searchRequest,
      Number(page) || 1
    );
    const products = new Array<Product>();
    for (const hit of results.hits) {
      products.push(hit.document);
    }
    res.status(200).json({ result: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
