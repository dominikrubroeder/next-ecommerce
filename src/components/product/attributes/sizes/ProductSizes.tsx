"use client";

import { useState } from "react";

export default function ProductSizes({
  sizes,
}: {
  sizes: string[] | undefined;
}) {
  const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : 0);

  if (sizes === null || sizes === undefined || sizes.length === 0) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="inline-block">Sizes:</div>
      <ul className="space-x-4 overflow-x-scroll whitespace-nowrap">
        {sizes.map((size) => (
          <li key={size} className="inline-block">
            <button
              className={`min-w-12 rounded-xl border px-4 py-3 text-center hover:border-gray-300 ${
                size === selectedSize
                  ? "border-gray-300 bg-gray-100"
                  : "border-gray-100"
              }`}
              title={`Select Product Size ${size}`}
              aria-label={`Select Product Size ${size}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
