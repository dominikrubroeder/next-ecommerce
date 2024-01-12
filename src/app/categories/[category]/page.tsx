import InlineBadge from "@/components/InlineBadge";
import CategoryProducts from "@/components/categories/products/CategoryProducts";
import BackLink from "@/components/BackLink";
import { Suspense } from "react";
import ProductLoading from "@/components/product/ProductLoading";

export const dynamic = "force-dynamic";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;

  return (
    <div className="px-4">
      <h1 className="border-b pb-5 text-2xl">
        Products for Category <InlineBadge>{category}</InlineBadge>
      </h1>

      <BackLink href="/categories" />

      <Suspense fallback={<ProductLoading />}>
        <CategoryProducts category={category} />
      </Suspense>
    </div>
  );
}
