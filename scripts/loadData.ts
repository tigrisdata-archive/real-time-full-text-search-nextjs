import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { Product } from "../db/models/store";
import { tigrisDB } from "../lib/tigris";
import productsJson from "../db/products.json";

async function main() {
  const products: Array<Product> = productsJson as Array<Product>;
  const productsCollection = tigrisDB.getCollection<Product>(Product);
  const inserted = await productsCollection.insertMany(products);
  console.log(inserted);
}

main()
  .then(async () => {
    console.log("Data loading complete ...");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });