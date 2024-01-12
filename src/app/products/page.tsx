import Link from "next/link";
import { getProducts } from "@/lib";
import InlineBadge from "@/components/InlineBadge";
import { QueueListIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import { filterProducts } from "@/lib/helpers";
import Sorting from "@/components/products/Sorting";
import ProductList from "@/components/product/product-list/ProductList";

export const dynamic = "force-dynamic";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    search?: string;
    filter?: string;
    sorting?: string;
    listView?: string;
  };
}) {
  const products = searchParams.search
    ? await getProducts("search", searchParams.search)
    : await getProducts();

  const filter = searchParams.filter;
  const sorting = searchParams.sorting;
  const listView = searchParams.listView;
  const filteredProducts = filterProducts(products, filter, sorting);

  return (
    <div className="grid gap-4">
      {searchParams.search ? (
        <section className="px-4">
          <h1 className="border-b pb-4 text-4xl">
            Search for <InlineBadge>{searchParams.search}</InlineBadge>
          </h1>

          <Link href="/products" className="my-4 flex items-center gap-2">
            All products
          </Link>
        </section>
      ) : (
        <section className="mx-4 flex justify-between gap-4 border-b pb-5">
          <h1 className="text-4xl">All Products</h1>

          <div className="flex items-center gap-4">
            <Sorting selected={sorting} />

            <div className="flex gap-1">
              <button className="rounded-2xl p-4 transition hover:bg-gray-100">
                <QueueListIcon className="h-4 w-4" />
              </button>
              <button className="rounded-2xl bg-gray-100 p-4 transition hover:bg-gray-100">
                <TableCellsIcon className="h-4 w-4" />
              </button>
            </div>

            <p>Filter here</p>
          </div>
        </section>
      )}

      <section className="flex flex-col gap-12 px-4 md:flex-row">
        <ProductList products={filteredProducts} listView={listView} />
      </section>
    </div>
  );
}
