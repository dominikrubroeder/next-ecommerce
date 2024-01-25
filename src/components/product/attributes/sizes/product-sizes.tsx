"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function ProductSizes({
  sizes,
}: {
  sizes: string[] | undefined;
}) {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const selectedSize = searchParams.get("size");

  if (sizes === null || sizes === undefined || sizes.length === 0) return null;

  return (
    <div className="space-y-4">
      <div>Sizes:</div>

      <ul className="space-x-4 overflow-x-auto whitespace-nowrap">
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
              onClick={() =>
                updateSearchParams({
                  withName: "size",
                  withValue: size,
                  withCleanup: false,
                })
              }
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
