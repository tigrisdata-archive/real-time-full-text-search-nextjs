import { Products } from "./db/models/store";
import tigrisDB from "./lib/tigris";
import fs from 'fs'

type Product = {
  id: number;
  name: string;
  price: number;
  star: number;
  tag: string;
  image: string;
};

//load the products data from the products.json file.
const rawdata = fs.readFileSync('./products.json',  'utf8');
//parse the data returned to JSON.
const data: Product[] = JSON.parse(rawdata);

async function loadData(data: Product[]) {
  try {
    const productsCollection = tigrisDB.getCollection<Products>(Products);
    const inserted = await productsCollection.insertMany(data);
    console.log(inserted);
  } catch (err) {
    console.log({ error: err.message });
  }
}
loadData(data);