"use client";

import { selectedClassName } from "@/lib/helpers";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function ProductTab({
  tab,
  searchParamsTab,
  index,
}: {
  tab: string;
  searchParamsTab: undefined | string;
  index: number;
}) {
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <button
      className={`cursor-pointer rounded-2xl border p-4 transition ${selectedClassName(
        index,
        tab,
        searchParamsTab,
      )}`}
      onClick={() => updateSearchParams({ withName: "tab", withValue: tab })}
    >
      {tab}
    </button>
  );
}
