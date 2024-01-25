"use client";

import ProductTab from "@/components/product/tabs/product-tab";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { selectedTabClassName } from "@/lib/helpers";

export default function ProductTabs({
  tabs,
}: {
  tabs: { title: string; content: string }[];
}) {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const searchParamsTab = searchParams.get("tab");

  if (tabs === null || tabs === undefined || tabs.length === 0) return null;

  const tabContent =
    tabs.find((tab) => tab.title === searchParamsTab)?.content ??
    tabs[0].content;

  return (
    <div className="grid gap-2">
      <ul className="no-scrollbar overflow-x-auto whitespace-nowrap border-r xl:border-none">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`my-4 inline-block cursor-pointer rounded-2xl border p-4 transition last-of-type:mr-4 ${selectedTabClassName(
              index,
              tab.title,
              searchParamsTab,
            )}`}
            onClick={() =>
              updateSearchParams({ withName: "tab", withValue: tab.title })
            }
          >
            <ProductTab tab={tab.title} />
          </li>
        ))}
      </ul>

      <div>{tabContent}</div>
    </div>
  );
}
