import {Product} from "@/interfaces";

/**
 * Add ability to apply discounts here. Handle all Product Price related stuff here.
 * @param product
 * @param discount
 */
export default function ProductPrice({
  product,
  discount,
}: {
  product: Product;
  discount?: string;
}) {
  return <div className="font-bold">{product.price} €</div>;
}
