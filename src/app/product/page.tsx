import Link from "next/link";
import { getProducts } from "@/lib";
import InlineBadge from "@/components/InlineBadge";
import ProductCard from "@/components/ProductCard";
import { QueueListIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import { filterProducts } from "@/helpers";
import Sorting from "@/components/Sorting";

export default async function ProductPage({
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

      <section className="flex gap-12">
        <ul
          className={`grid flex-1 gap-8 ${
            listView === "Row" ? "" : "sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link href={product.fullPath}>
                <ProductCard product={product} />
              </Link>
            </li>
          ))}
        </ul>

        <aside className="min-w-max pl-4 pr-8">
          <h2 className="mb-4 text-lg font-semibold">Filters</h2>
          <fieldset className="select-none">
            <legend className="mb-2 text-sm font-semibold">Price range</legend>
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-normal">
                <input type="checkbox" id="price-under-50" />
                Under 50€
              </label>
              <label className="flex items-center gap-2 font-normal">
                <input type="checkbox" id="price-50-100" />
                50€ - 100€
              </label>
              <label className="flex items-center gap-2 font-normal">
                <input type="checkbox" id="price-over-100" />
                Over 100€
              </label>
            </div>
          </fieldset>
        </aside>
      </section>
    </div>
  );
}
