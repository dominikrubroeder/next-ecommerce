import Link from "next/link";
import { getProducts } from "@/src/lib";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: {
    search?: string;
  };
}) {
  const products = searchParams.search
    ? await getProducts("category", searchParams.search)
    : await getProducts();

  return (
    <div className="p-4">
      <h1 className="text-2xl">
        Hello, world – All products, no matter the category
      </h1>
      <ul className="mt-4 grid gap-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={product.fullPath}>Show Product {product.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
