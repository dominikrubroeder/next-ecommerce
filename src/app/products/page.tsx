import Link from "next/link";
import { getProducts } from "@/lib";
import InlineBadge from "@/components/InlineBadge";
import Product from "@/components/product/Product";
import { QueueListIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import { filterProducts } from "@/lib/helpers";
import Sorting from "@/components/products/Sorting";
import Filter from "@/components/products/Filter";

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
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="inline-block text-2xl">All Products</h1>

          <div className="flex gap-4">
            <Sorting selected={sorting} />

            <div className="flex gap-1">
              <button className="rounded-2xl p-4 transition hover:bg-gray-100">
                <QueueListIcon className="h-4 w-4" />
              </button>
              <button className="rounded-2xl bg-gray-100 p-4 transition hover:bg-gray-100">
                <TableCellsIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="flex flex-col gap-12 md:flex-row">
        <ul
          className={`order-2 grid flex-1 gap-8 md:order-1 ${
            listView === "Row" ? "" : "sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link href={product.fullPath}>
                <Product product={product} />
              </Link>
            </li>
          ))}
        </ul>

        <aside className="order-1 min-w-max md:order-2">
          <Filter />
        </aside>
      </section>
    </div>
  );
}
