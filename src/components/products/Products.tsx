import Product from "@/components/product/Product";
import { getProducts } from "@/lib";
import { filterProducts } from "@/lib/helpers";
import { unstable_noStore } from "next/cache";

export default async function Products({
  filter,
  sorting,
  listView,
  category,
  searchTerm,
}: {
  filter?: string | undefined;
  sorting?: string | undefined;
  listView?: string | undefined;
  category?: string | undefined;
  searchTerm?: string | undefined;
}) {
  unstable_noStore();

  const products = category
    ? await getProducts("category", category)
    : searchTerm
      ? await getProducts("search", searchTerm)
      : await getProducts();

  if (products === null || products === undefined || products.length === 0)
    return <div>No Products listed.</div>;

  const filteredProducts = filterProducts(products, filter, sorting);

  return (
    <ul
      className={`w-full ${
        listView === "Grid" ? "sm:grid-cols-2 md:grid-cols-3" : ""
      }`}
      title={`All products for category ${category}`}
      aria-label={`All products for category ${category}`}
    >
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
