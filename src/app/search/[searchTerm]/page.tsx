import InlineBadge from "@/components/inline-badge";
import BackLink from "@/components/back-link";
import { Suspense } from "react";
import Products from "@/components/products/products";
import ProductLoading from "@/components/product/product-loading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Next ecommerce",
};

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
