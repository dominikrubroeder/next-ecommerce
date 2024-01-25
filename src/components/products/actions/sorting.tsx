"use client";

import type { SortingOption } from "@/types";
import { BarsArrowUpIcon } from "@heroicons/react/24/outline";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function Sorting() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  const selectedSortingOption = searchParams.get("sorting");

  return (
    <div className="flex gap-1">
      {options.map((sortingOption) => (
        <button
          key={sortingOption.title}
          className={`rounded-2xl p-4 transition hover:bg-gray-100 ${
            sortingOption.value === selectedSortingOption ||
            selectedSortingOption === null
              ? "bg-gray-100"
              : "bg-transparent"
          }`}
          onClick={() =>
            updateSearchParams({
              withName: "sorting",
              withValue: sortingOption.value,
            })
          }
          title={`Sorting: ${sortingOption.title}`}
        >
          <BarsArrowUpIcon className="h-4 w-4" />
        </button>
      ))}
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
