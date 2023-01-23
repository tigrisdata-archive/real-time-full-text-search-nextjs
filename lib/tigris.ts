import { DB, Tigris } from "@tigrisdata/core";

const tigrisClient = new Tigris();
const tigrisDB: DB = tigrisClient.getDatabase();

// export to share client and DB across modules
export { tigrisClient, tigrisDB };