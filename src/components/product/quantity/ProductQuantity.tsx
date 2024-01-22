"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <button
        className="disabled:opacity-10"
        title="Decrease quantity by one"
        aria-label="Decrease quantity by one"
        onClick={() => setQuantity((prevState) => prevState - 1)}
        disabled={quantity <= 0}
      >
        <MinusIcon className="h-4 w-4" />
      </button>

      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        className="w-16 rounded-xl border px-4 py-3 text-center"
      />

      <button
        className="disabled:opacity-10"
        title="Increase quantity by one"
        aria-label="Increase quantity by one"
        onClick={() => setQuantity((prevState) => prevState + 1)}
        disabled={quantity >= 10}
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
