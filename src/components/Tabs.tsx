"use client";

import { getTabContent } from "@/helpers";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function Tabs({
  tabs,
}: {
  tabs: { title: string; content: string }[];
}) {
  const { router, pathname, searchParams, createQueryString } =
    useUpdateSearchParams();

  const searchParamsTab = searchParams.get("tab");
  const { tabContent } = getTabContent(tabs, searchParamsTab);

  if (tabs === undefined) return null;

  return (
    <div>
      <ul className="flex flex-wrap">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => {
              router.push(
                pathname +
                  "?" +
                  createQueryString("tab", `${tab.title.toLowerCase()}`),
                { scroll: false },
              );
            }}
          >
            <div
              className={`cursor-pointer rounded-2xl transition ${
                tab.title.toLowerCase() === searchParamsTab ||
                (searchParamsTab === null && index === 0)
                  ? "bg-gray-100"
                  : "bg-transparent"
              } p-4`}
            >
              {tab.title}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 pl-2">{tabContent}</div>
    </div>
  );
}
