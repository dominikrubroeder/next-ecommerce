"use client";
import Accordion from "@/components/Accordion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const appliedFilters = searchParams.getAll("filter");

  const onClick = (value: string, withCleanUp?: boolean) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (withCleanUp) {
      for (const [key] of searchParams.entries()) {
        current.delete(key);
      }
    }

    if (!value) {
      current.delete("filter");
    } else if (current.getAll("filter").includes(value)) {
      current.delete("filter", value);
    } else {
      current.set("filter", value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  return (
    <Accordion title="Filters" open={true} background={false} icons="chevron">
      <fieldset className="select-none">
        <legend className="mb-2 text-sm font-semibold">Price range</legend>
        <div className="space-y-2">
          <label className="flex items-center gap-2 font-normal">
            <input
              type="checkbox"
              onChange={() => onClick("price-under-50")}
              checked={appliedFilters.includes("price-under-50")}
            />
            Under 50€
          </label>
          <label className="flex items-center gap-2 font-normal">
            <input
              type="checkbox"
              onChange={() => onClick("price-50-100")}
              checked={appliedFilters.includes("price-50-100")}
            />
            50€ - 100€
          </label>
          <label className="flex items-center gap-2 font-normal">
            <input
              type="checkbox"
              onChange={() => onClick("price-over-100")}
              checked={appliedFilters.includes("price-over-100")}
            />
            Over 100€
          </label>
        </div>
      </fieldset>
    </Accordion>
  );
}
