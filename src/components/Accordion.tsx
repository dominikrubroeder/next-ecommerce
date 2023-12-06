"use client";
import { ReactNode, useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export default function Accordion({
  title,
  children,
  open,
  background = true,
  icons = "plus-minus",
}: {
  title: string;
  children: ReactNode;
  open?: boolean;
  background?: boolean;
  icons?: "chevron" | "plus-minus";
}) {
  const [showContent, setShowContent] = useState(open);

  return (
    <div
      className={`w-full min-w-[10rem] rounded-2xl ${
        background ? "bg-gray-100" : "bg-transparent"
      }`}
    >
      <header
        className={`flex cursor-pointer select-none items-center justify-between gap-2 rounded-2xl ${
          background ? "p-4" : "p-0 pb-4"
        }`}
        onClick={() => setShowContent((prevState) => !prevState)}
      >
        <h3>{title}</h3>
        {showContent && icons === "plus-minus" && (
          <MinusIcon className="h-5 w-5" />
        )}
        {!showContent && icons === "plus-minus" && (
          <PlusIcon className="h-5 w-5" />
        )}
        {showContent && icons === "chevron" && (
          <ChevronRightIcon className="h-4 w-4" />
        )}
        {!showContent && icons === "chevron" && (
          <ChevronDownIcon className="h-4 w-4" />
        )}
      </header>
      <div
        className={`${
          showContent
            ? `visible h-full w-full translate-y-0 opacity-100 ${
                background ? "px-4 pb-3" : "p-0"
              }`
            : "invisible h-0 w-0 -translate-y-4 px-0 pb-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
