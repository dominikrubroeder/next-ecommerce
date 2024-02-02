"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function FilterTrigger() {
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <button
      className="rounded border bg-white p-4"
      aria-label="Show all Filters"
      title="Show all Filters"
      onClick={() =>
        updateSearchParams({ withName: "showFilter", withValue: "true" })
      }
    >
      <div>Filter</div>
    </button>
  );
}
