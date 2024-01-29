import Sorting from "@/components/products/actions/sorting/sorting";
import Products from "@/components/products/products";
import { Suspense } from "react";
import ProductLoading from "@/components/product/product-loading";
import type { Metadata } from "next";
import Filter from "@/components/products/actions/filter/filter";
import FilterTrigger from "@/components/products/actions/filter/filter-trigger";
import SortingTrigger from "@/components/products/actions/sorting/sorting-trigger";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Products | Next ecommerce",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: {
    filter?: string;
    sorting?: string;
    listView?: string;
  };
}) {
  const filter = searchParams.filter;
  const sorting = searchParams.sorting;

  return (
    <div className="grid gap-4">
      <section className="mx-4 flex justify-between gap-4 border-b pb-5">
        <h1 className="text-4xl">All Products</h1>
      </section>

      <section className="min-h-dvh px-4">
        <Suspense fallback={<ProductLoading />}>
          <Products filter={filter} sorting={sorting} />
        </Suspense>
      </section>

      <section className="sticky bottom-0 grid gap-4 border-t bg-gray-50 px-4 py-4">
        <Sorting />
        <Filter />

        <div className="grid grid-cols-2 gap-4">
          <FilterTrigger />
          <SortingTrigger />
        </div>
      </section>
    </div>
  );
}
