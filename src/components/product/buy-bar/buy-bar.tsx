import {Product} from "@/interfaces";
import ProductQuantity from "@/components/product/quantity/product-quantity";
import ProductPrice from "@/components/product/price/product-price";
import AddToCartButton from "@/components/product/actions/add-to-cart-button";
import BuyButton from "@/components/product/actions/buy-button";

/**
 * Summarizes all relevant Product Data and actions for the user in `a sticky UI Bar`.
 * - One, central spot to do all user actions related to the Product Page.
 * - Stays sticky on scroll, always visible and comfortable in reach for Thumb on mobile screens
 * - Fade's out when Product page should focus on information and marketing instead of buy-focus.
 * @param product
 */
export default function BuyBar({ product }: { product: Product }) {
  return (
    <section className="sticky bottom-0 z-50 mt-10 border-b border-t bg-white p-4">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 lg:justify-end lg:border-l lg:pl-8 2xl:border-l-0 2xl:pl-0">
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
