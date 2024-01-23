"use client";

import {Product} from "@/interfaces";
import CheckoutDialog from "@/components/checkout/CheckoutDialog";
import {useState} from "react";

/**
 * When click on the instant-buy button `BuyButton.tsx`, show a Modal on the same Product Page screen to directly let the user complete his order and checkout the selected item
 * - Immediate fulfillment of the buy user-journey
 * - Less, or almost no barriers during Checkout process (Show whole process in a modal)
 * */
export default function BuyButton({ product }: { product: Product }) {
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);

  return (
    <>
      <CheckoutDialog open={showCheckoutDialog} />

      <button
        className="rounded-xl border px-4 py-3"
        title={`Instant-buy of ${product.title}`}
        aria-label={`Instant-buy of ${product.title}`}
        onClick={() => {
          console.log("Instant buy of", product);
          setShowCheckoutDialog(true);
        }}
      >
        Buy
      </button>
    </>
  );
}
