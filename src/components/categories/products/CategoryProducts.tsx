import Product from "@/components/product/Product";
import { getProducts } from "@/lib";

export default async function CategoryProducts({
  category,
}: {
  category: string;
}) {
  const products = await getProducts("category", category);

  if (products === null || products === undefined || products.length === 0)
    return <div>No products found.</div>;

  return (
    <ul
      className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
      title={`All products for category ${category}`}
      aria-label={`All products for category ${category}`}
    >
      {products.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
