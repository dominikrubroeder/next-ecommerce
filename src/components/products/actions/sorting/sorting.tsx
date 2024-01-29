"use client";

import type { SortingOption } from "@/types";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function Sorting() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  const selectedSortingOption = searchParams.get("sorting");
  const showSorting = searchParams.get("showSorting");

  if (showSorting !== "true") return null;

  return (
    <div>
      <div className="mb-2 text-sm font-semibold">By Title</div>
      <ul className="grid gap-2">
        {options.map((sortingOption) => (
          <li key={sortingOption.title}>
            <label
              key={sortingOption.title}
              className="flex items-center gap-2 font-normal"
            >
              <input
                type="checkbox"
                onChange={() =>
                  updateSearchParams({
                    withName: "sorting",
                    withValue: sortingOption.value,
                    append: true,
                  })
                }
                checked={selectedSortingOption === sortingOption.value}
              />
              {sortingOption.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const options: SortingOption[] = [
  {
    title: "Title descending",
    value: "titleDescending",
    icon: "BarsArrowUpIcon",
  },
  {
    title: "Title ascending",
    value: "titleAscending",
    icon: "BarsArrowDownIcon",
  },
];
