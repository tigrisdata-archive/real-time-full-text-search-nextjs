import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { Product } from "../db/models/products";
import { tigrisClient } from "../lib/tigris";

async function main() {
  // ensure branch exists, create it if it needs to be created dynamically
  await tigrisClient.getDatabase().initializeBranch();
  // create collections
  await tigrisClient.registerSchemas([Product]);
}

main()
  .then(async () => {
    console.log("Setup complete ...");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
