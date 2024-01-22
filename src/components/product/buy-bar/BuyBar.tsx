import {Product} from "@/interfaces";
import ProductQuantity from "@/components/product/quantity/ProductQuantity";
import ProductPrice from "@/components/product/price/ProductPrice";
import AddToCartButton from "@/components/product/actions/AddToCartButton";
import BuyButton from "@/components/product/actions/BuyButton";

/**
 * Summarizes all relevant Product Data and actions for the user in `a sticky UI Bar`.
 * - One, central spot to do all user actions related to the Product Page.
 * - Stays sticky on scroll, always visible and comfortable in reach for Thumb on mobile screens
 * - Fade's out when Product page should focus on information and marketing instead of buy-focus.
 * @param product
 */
export default function BuyBar({ product }: { product: Product }) {
  return (
    <section className="sticky bottom-0 z-50 flex items-center justify-end gap-4 border-t bg-white p-4">
      <ProductQuantity />

      <ProductPrice product={product} />

      <div className="space-x-2">
        <AddToCartButton product={product} />
        <BuyButton product={product} />
      </div>
    </section>
  );
}
