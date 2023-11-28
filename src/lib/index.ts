import { Product } from "@/src/interfaces";
import { promises as fs } from "fs";

export async function getData(): Promise<{
  products: Product[];
}> {
  if (process.env.NODE_ENV === "development") {
    const res = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
    return JSON.parse(res);
  } else {
    const res = await fetch("https://next-ecomm-one.vercel.app/data.json");
    return res.json();
  }
}

export async function getProducts(): Promise<Product[]> {
  const { products } = await getData();
  return products;
}
