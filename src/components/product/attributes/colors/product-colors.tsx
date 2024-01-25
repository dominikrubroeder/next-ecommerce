"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function ProductColors({
  colors,
}: {
  colors: string[] | undefined;
}) {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const selectedColor = searchParams.get("color");

  if (colors === null || colors === undefined || colors.length === 0)
    return null;

  return (
    <div className="space-y-4">
      <div>Colors:</div>

      <ul
        className="inline-block space-x-4"
        aria-label="Current product colors"
      >
        {colors.map((color, index) => (
          <li key={color} className="inline-block">
            <button
              className={`min-w-12 rounded-xl border px-4 py-3 text-center hover:border-gray-300 ${
                color === selectedColor
                  ? "border-gray-300 bg-gray-100"
                  : "border-gray-100"
              }`}
              title={`Select Product Color ${color}`}
              aria-label={`Select Product Color ${color}`}
              onClick={() =>
                updateSearchParams({
                  withName: "color",
                  withValue: color,
                  withCleanup: false,
                })
              }
            >
              <span
                className="block h-4 w-4 shrink-0 rounded-full border"
                style={{ backgroundColor: color }}
              ></span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
