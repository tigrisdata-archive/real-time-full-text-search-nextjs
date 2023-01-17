import { Products } from "./db/models/store";
import tigrisDB from "./lib/tigris";
import { products } from "./pages/api/_products";

async function loadData() {
  try {
    const productsCollection = tigrisDB.getCollection<Products>(Products);
    const inserted = await productsCollection.insertMany(products);
    console.log(inserted);
  } catch (err) {
    console.log({ error: err.message });
  }
}
loadData();