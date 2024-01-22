"use client";

import { useState } from "react";

export default function ProductColors({
  colors,
}: {
  colors: string[] | undefined;
}) {
  const [selectedColor, setSelectedColor] = useState(colors ? colors[0] : 0);

  if (colors === null || colors === undefined || colors.length === 0)
    return null;

  return (
    <div className="flex items-center gap-4">
      <div className="inline-block">Colors:</div>
      <ul className="space-x-4" aria-label="Current product colors">
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
              onClick={() => setSelectedColor(color)}
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
