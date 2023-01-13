import { DB, Tigris } from "@tigrisdata/core";

const tigrisClient = new Tigris();
const tigrisDB: DB = tigrisClient.getDatabase();

// export to share DB across modules
export default tigrisDB;