import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { Products } from "./db/models/store";
import tigrisDB from "./lib/tigris";
import productsJson from "./db/products.json"

async function loadData() {
  const products: Array<Products> = productsJson as Array<Products>;
  const productsCollection = tigrisDB.getCollection<Products>(Products);
  const inserted = await productsCollection.insertMany(products);
  console.log(inserted);
}

loadData();