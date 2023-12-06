"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SortingOption } from "@/types";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";

const options: SortingOption[] = [
  {
    title: "Title descending",
    value: "titleDescending",
  },
  {
    title: "Title ascending",
    value: "titleAscending",
  },
];

export default function Sorting({
  selected,
  withCleanUp,
}: {
  selected: string | string[] | undefined;
  withCleanUp?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onClick = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (withCleanUp) {
      for (const [key] of searchParams.entries()) {
        current.delete(key);
      }
    }

    if (!value) {
      current.delete("sorting");
    } else {
      current.set("sorting", value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  return (
    <div className="flex gap-1">
      <button
        className={`rounded-2xl p-4 transition hover:bg-gray-100 ${
          selected === "titleDescending" || selected === undefined
            ? "bg-gray-100"
            : "bg-transparent"
        }`}
        onClick={() => onClick("titleDescending")}
        title="Sorting: Title descending"
      >
        <BarsArrowUpIcon className="h-4 w-4" />
      </button>
      <button
        className={`rounded-2xl p-4 transition hover:bg-gray-100 ${
          selected === "titleAscending" ? "bg-gray-100" : "bg-transparent"
        }`}
        onClick={() => onClick("titleAscending")}
        title="Sorting: Title ascending"
      >
        <BarsArrowDownIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
