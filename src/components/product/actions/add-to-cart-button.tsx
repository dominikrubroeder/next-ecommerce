"use client";

import { Product } from "@/interfaces";

export default function AddToCartButton({ product }: { product: Product }) {
  return (
    <button
      className="rounded-xl border px-4 py-3"
      title={`Add product ${product.title} to my Cart`}
      aria-label={`Add product ${product.title} to my Cart`}
      onClick={() => console.log("Add to cart", product)}
    >
      Add to Cart
    </button>
  );
}
