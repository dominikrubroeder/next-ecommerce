import Link from "next/link";
import { getProducts } from "@/lib";
import InlineBadge from "@/components/InlineBadge";
import ProductCard from "@/components/ProductCard";

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
      {searchParams.search ? (
        <>
          <h1 className="inline-block border-b pb-4 text-2xl">
            Search for <InlineBadge>{searchParams.search}</InlineBadge>
          </h1>

          <Link href="/product" className="my-4 flex items-center gap-2">
            All products
          </Link>
        </>
      ) : (
        <h1 className="mb-4 inline-block text-2xl">All Products</h1>
      )}

      <ul className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={product.fullPath}>
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
