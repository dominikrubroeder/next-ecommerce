import Product from "@/components/product/product";
import { getProducts } from "@/lib";
import { filterProducts } from "@/lib/helpers";

export default async function Products({
  filter,
  sorting,
  category,
  searchTerm,
}: {
  filter?: string | undefined;
  sorting?: string | undefined;
  category?: string | undefined;
  searchTerm?: string | undefined;
}) {
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
      className={`grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3`}
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
