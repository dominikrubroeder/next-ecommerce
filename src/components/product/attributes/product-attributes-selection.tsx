"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { capitalize } from "@/lib/helpers";

export default function ProductAttributesSelection() {
  const { searchParams } = useUpdateSearchParams();

  let allSearchParams = [];
  for (const [key, value] of searchParams.entries()) {
    allSearchParams.push({ key, value });
  }

  return (
    <div className="hidden lg:block">
      <ul className="flex items-center gap-4">
        {allSearchParams.map((searchParamsCategory) => (
          <li key={searchParamsCategory.key}>
            <div className="flex items-center gap-2">
              {capitalize(searchParamsCategory.key)}:
              <span className="animate-fade-up w-min rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-center hover:border-gray-300">
                {searchParamsCategory.value}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
