"use client";
import Accordion from "@/components/Accordion";

export default function Filter() {
  return (
    <Accordion title="Filters" open={true} background={false} icons="chevron">
      <fieldset className="select-none">
        <legend className="mb-2 text-sm font-semibold">Price range</legend>
        <div className="space-y-2">
          <label className="flex items-center gap-2 font-normal">
            <input type="checkbox" id="price-under-50" />
            Under 50€
          </label>
          <label className="flex items-center gap-2 font-normal">
            <input type="checkbox" id="price-50-100" />
            50€ - 100€
          </label>
          <label className="flex items-center gap-2 font-normal">
            <input type="checkbox" id="price-over-100" />
            Over 100€
          </label>
        </div>
      </fieldset>
    </Accordion>
  );
}
