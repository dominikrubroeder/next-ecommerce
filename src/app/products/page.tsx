import {
  AdjustmentsHorizontalIcon,
  QueueListIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import Sorting from "@/components/products/actions/Sorting";
import Products from "@/components/products/Products";
import { Suspense } from "react";
import ProductLoading from "@/components/product/ProductLoading";
import type { Metadata } from "next";

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
      <section className="mx-4 flex justify-between gap-4 border-b pb-3.5">
        <h1 className="text-4xl">All Products</h1>

        <div className="flex items-center gap-4">
          <Sorting selected={sorting} />

          <div className="flex gap-1">
            <button className="rounded-2xl bg-gray-100 p-4 transition hover:bg-gray-100">
              <QueueListIcon className="h-4 w-4" />
            </button>

            <button className="rounded-2xl p-4 transition hover:bg-gray-100">
              <TableCellsIcon className="h-4 w-4" />
            </button>
          </div>

          <button className="rounded-2xl p-4 transition hover:bg-gray-100">
            <AdjustmentsHorizontalIcon className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="px-4">
        <Suspense fallback={<ProductLoading />}>
          <Products filter={filter} sorting={sorting} listView={listView} />
        </Suspense>
      </section>
    </div>
  );
}
