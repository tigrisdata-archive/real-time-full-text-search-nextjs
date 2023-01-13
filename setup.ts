import { loadEnvConfig } from "@next/env";
import { Tigris } from "@tigrisdata/core";
import { Products } from "./db/models/store";

async function main() {
  // load environment variables
  loadEnvConfig(process.cwd());

  // create collections
  const tigrisClient = new Tigris();
  await tigrisClient.registerSchemas([Products]);
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