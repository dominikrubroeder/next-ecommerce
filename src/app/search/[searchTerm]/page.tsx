import InlineBadge from "@/components/InlineBadge";
import BackLink from "@/components/BackLink";
import { Suspense } from "react";
import Products from "@/components/products/Products";
import ProductLoading from "@/components/product/ProductLoading";

export default function SearchTermPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  return (
    <div>
      <section className="px-4">
        <h1 className="border-b pb-4 text-4xl">
          Search for <InlineBadge>{params.searchTerm}</InlineBadge>
        </h1>

        <BackLink href="/products" label="All Products" />
      </section>

      <section className="px-4">
        <Suspense fallback={<ProductLoading />}>
          <Products searchTerm={params.searchTerm} />
        </Suspense>
      </section>
    </div>
  );
}
