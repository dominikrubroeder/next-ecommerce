import {Product} from "@/interfaces";
import ProductQuantity from "@/components/product/quantity/ProductQuantity";
import ProductPrice from "@/components/product/price/ProductPrice";
import AddToCartButton from "@/components/product/actions/AddToCartButton";
import BuyButton from "@/components/product/actions/BuyButton";
import ProductAttributes from "@/components/product/attributes/ProductAttributes";

/**
 * Summarizes all relevant Product Data and actions for the user in `a sticky UI Bar`.
 * - One, central spot to do all user actions related to the Product Page.
 * - Stays sticky on scroll, always visible and comfortable in reach for Thumb on mobile screens
 * - Fade's out when Product page should focus on information and marketing instead of buy-focus.
 * @param product
 */
export default function BuyBar({ product }: { product: Product }) {
  return (
    <section className="sticky bottom-0 z-50 grid gap-4 overflow-x-hidden border-t bg-white p-4 lg:flex lg:items-center lg:justify-between">
      <ProductAttributes productAttributes={product.attributes} />

      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 lg:justify-end">
        <ProductQuantity />

        <div className="flex items-center gap-4">
          <ProductPrice product={product} />

          <div className="space-x-2">
            <AddToCartButton product={product} />
            <BuyButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}