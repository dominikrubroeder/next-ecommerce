import InlineBadge from "@/components/InlineBadge";
import BackLink from "@/components/BackLink";
import { Suspense } from "react";
import ProductLoading from "@/components/product/ProductLoading";
import { capitalize } from "@/lib/helpers";
import Products from "@/components/products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products on Category | Next ecommerce",
};

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = capitalize(params.category);

  return (
    <div className="px-4">
      <h1 className="border-b pb-5 text-4xl">
        Products for Category <InlineBadge>{category}</InlineBadge>
      </h1>

      <BackLink href="/categories" />

      <Suspense fallback={<ProductLoading />}>
        <Products category={category} />
      </Suspense>
    </div>
  );
}
