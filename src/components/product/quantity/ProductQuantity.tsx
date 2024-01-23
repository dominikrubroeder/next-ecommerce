"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useProductQuantity } from "@/hooks/useProductQuantity";

export default function ProductQuantity() {
  const {
    quantity,
    minQuantity,
    maxQuantity,
    increase,
    decrease,
    onInputChange,
  } = useProductQuantity();

  return (
    <div className="flex items-center gap-4">
      <button
        className="disabled:opacity-10"
        title="Decrease quantity by one"
        aria-label="Decrease quantity by one"
        onClick={() => decrease()}
        disabled={quantity <= minQuantity}
      >
        <MinusIcon className="h-4 w-4" />
      </button>

      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => onInputChange(e)}
        className="w-16 rounded-xl border px-4 py-3 text-center"
      />

      <button
        className="disabled:opacity-10"
        title="Increase quantity by one"
        aria-label="Increase quantity by one"
        onClick={() => increase()}
        disabled={quantity >= maxQuantity}
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
