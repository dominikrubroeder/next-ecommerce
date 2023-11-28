import Link from "next/link";
import { Product } from "@/src/interfaces";

export default async function ProductPage() {
  const products: Product[] = [];

  return (
    <div>
      <h1>Hello, world – All products, no matter the category</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={product.fullPath}>Show Product {product.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
