"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export default function StatusButton({
  status,
  children,
  ariaLabel,
  title,
  onClick,
}: {
  status: "All-right" | "Warning" | "Danger";
  children: ReactNode;
  ariaLabel?: string;
  title?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={clsx("rounded border px-4 py-3 transition", {
        "border-green-200 bg-green-50 text-green-500 hover:border-green-400":
          status === "All-right",
        "border-red-100 bg-red-50 text-red-400 hover:border-red-400":
          status === "Danger",
        "border-orange-100 bg-orange-50 text-orange-400 hover:border-orange-400":
          status === "Warning",
      })}
      aria-label={ariaLabel}
      title={title}
      onClick={() => (onClick ? onClick() : null)}
    >
      {children}
    </button>
  );
}
