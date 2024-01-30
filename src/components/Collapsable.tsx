"use client";

import { ReactNode, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Collapsable({
  as = "div",
  title,
  children,
  withBorder = true,
}: {
  as: "div" | "section";
  title: string;
  children: ReactNode;
  withBorder?: boolean;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const Element = as;

  return (
    <Element>
      <div
        className="flex cursor-pointer select-none items-center gap-2"
        onClick={() => setCollapsed((prevState) => !prevState)}
      >
        <ChevronRightIcon
          className={`h-4 w-4 text-accent transition ${
            collapsed ? "rotate-90" : "rotate-0"
          }`}
        />
        <div className="mt-4 flex-1">
          <h2
            className={`border-b pb-4 ${
              withBorder
                ? "border-gray-200"
                : "border-b border-transparent pb-4"
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
      {collapsed && children}
    </Element>
  );
}
