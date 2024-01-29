"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { FilterOption } from "@/types";

export default function Filter() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  const appliedFilters = searchParams.getAll("filter");
  const showFilters = searchParams.get("showFilter");

  if (showFilters !== "true") return null;

  return (
    <fieldset className="flex select-none flex-wrap gap-8">
      <div className="space-y-4">
        <legend className="mb-2 text-sm font-semibold">Price range</legend>
        <div className="space-y-2">
          {options.map((filterOption) => {
            return filterOption.group === "Price" ? (
              <label
                key={filterOption.title}
                className="flex items-center gap-2 font-normal"
              >
                <input
                  type="checkbox"
                  onChange={() =>
                    updateSearchParams({
                      withName: "filter",
                      withValue: filterOption.value,
                      append: true,
                    })
                  }
                  checked={appliedFilters.includes(filterOption.value)}
                />
                {filterOption.title}
              </label>
            ) : null;
          })}
        </div>
      </div>

      <div className="space-y-4">
        <legend className="mb-2 text-sm font-semibold">Colors</legend>
        <div className="space-y-2">
          {options.map((filterOption) => {
            return filterOption.group === "Color" ? (
              <label
                key={filterOption.title}
                className="flex items-center gap-2 font-normal"
              >
                <input
                  type="checkbox"
                  onChange={() =>
                    updateSearchParams({
                      withName: "filter",
                      withValue: filterOption.value,
                      append: true,
                    })
                  }
                  checked={appliedFilters.includes(filterOption.value)}
                />
                {filterOption.title}
              </label>
            ) : null;
          })}
        </div>
      </div>
    </fieldset>
  );
}

const options: FilterOption[] = [
  {
    group: "Price",
    title: "Price under 50",
    value: "price-under-50",
  },
  {
    group: "Price",
    title: "Price 50 - 100",
    value: "price-50-100",
  },
  {
    group: "Price",
    title: "Price over 100",
    value: "price-over-100",
  },
  {
    group: "Color",
    title: "Color Red",
    value: "color-red",
  },
  {
    group: "Color",
    title: "Color Blue",
    value: "color-blue",
  },
];
