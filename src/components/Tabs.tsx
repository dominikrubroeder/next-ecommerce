"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { getTabContent } from "@/helpers";

export default function Tabs({
  tabs,
}: {
  tabs: { title: string; content: string }[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsTab = searchParams.get("tab");
  const { tabContent } = getTabContent(tabs, searchParamsTab);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

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
