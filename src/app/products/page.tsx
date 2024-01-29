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
  const listView = searchParams.listView;

  return (
    <div className="grid gap-4">
      <section className="mx-4 flex justify-between gap-4 border-b pb-5">
        <h1 className="text-4xl">All Products</h1>
      </section>

      <section className="sticky top-0 mx-4 grid grid-cols-2 gap-4 bg-white pt-4">
        <FilterTrigger />
        <SortingTrigger />
      </section>

      <section className="mx-4 grid grid-cols-2 gap-4">
        <Filter />
        <Sorting />
      </section>

      <section className="px-4">
        <Suspense fallback={<ProductLoading />}>
          <Products filter={filter} sorting={sorting} listView={listView} />
        </Suspense>
      </section>
    </div>
  );
}
