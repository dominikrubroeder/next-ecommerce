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
  initiallyOpen,
  icons = "plus-minus",
}: {
  title: string;
  children: ReactNode;
  initiallyOpen?: boolean;
  icons?: "plus-minus" | "chevron";
}) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <div className="rounded-2xl bg-gray-100">
      <header
        className="flex cursor-pointer select-none items-center justify-between gap-2 rounded-2xl p-4"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h3>{title}</h3>

        {open && icons === "plus-minus" && <MinusIcon className="h-5 w-5" />}
        {!open && icons === "plus-minus" && <PlusIcon className="h-5 w-5" />}
        {open && icons === "chevron" && <ChevronDownIcon className="h-4 w-4" />}
        {!open && icons === "chevron" && (
          <ChevronRightIcon className="h-4 w-4" />
        )}
      </header>

      <div
        className={
          open
            ? "visible h-full w-full translate-y-0 px-4 pb-3 opacity-100"
            : "invisible h-0 w-0 -translate-y-4 px-0 pb-0 opacity-0"
        }
      >
        {children}
      </div>
    </div>
  );
}
