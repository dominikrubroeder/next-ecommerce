import { Product } from "@/interfaces";

export default function ProductPrice({
  product,
  discount,
}: {
  product: Product;
  discount?: string;
}) {
  return <div className="font-bold">{product.price} €</div>;
}
