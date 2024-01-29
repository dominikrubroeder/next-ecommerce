"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function SortingTrigger() {
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <button
      className="border bg-white p-4"
      aria-label="Show Sorting options"
      title="Show all Sorting options"
      onClick={() =>
        updateSearchParams({ withName: "showSorting", withValue: "true" })
      }
    >
      Sorting
    </button>
  );
}
