import { getProducts } from "@/lib";
import Link from "next/link";
import InlineBadge from "@/components/InlineBadge";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({
  params,
}: {
  params: { handle: string[] };
}) {
  const products = await getProducts("category", params.handle[0]);

  if (products.length === 0) {
    return (
      <div className="p-4">
        <div className="mb-2">
          No products found for
          <InlineBadge>{params.handle}</InlineBadge>.
        </div>
        <Link href="/category" className="flex items-center gap-2">
          <ArrowLongLeftIcon className="h-5 w-5" />
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="border-b pb-4 text-2xl sm:inline-block">
        Products for Category <InlineBadge>{params.handle}</InlineBadge>
      </h1>

      <Link href="/category" className="my-4 flex items-center gap-2">
        <ArrowLongLeftIcon className="h-5 w-5" />
        Back
      </Link>

      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
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
