import Link from "next/link";
import { Product as IProduct } from "@/interfaces";
import Product from "@/components/product/Product";

export default function ProductList({
  products,
  listView,
}: {
  products: IProduct[];
  listView: undefined | string;
}) {
  return (
    <ul
      className={`order-2 grid flex-1 gap-8 md:order-1 ${
        listView === "Row" ? "" : "sm:grid-cols-2 md:grid-cols-3"
      }`}
    >
      {products.map((product) => (
        <li key={product.id}>
          <Link href={product.path}>
            <Product product={product} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
