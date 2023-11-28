import Link from "next/link";
import { getProducts } from "@/src/lib";
import InlineBadge from "@/src/components/InlineBadge";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: {
    search?: string;
  };
}) {
  const products = searchParams.search
    ? await getProducts("search", searchParams.search)
    : await getProducts();

  return (
    <div className="p-4">
      {searchParams.search && (
        <small>
          Search for:<InlineBadge>{searchParams.search}</InlineBadge>
        </small>
      )}

      <h1 className="text-2xl">Hello, world – All products, with Search</h1>
      <ul className="mt-4 grid gap-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={product.fullPath}>Show {product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
