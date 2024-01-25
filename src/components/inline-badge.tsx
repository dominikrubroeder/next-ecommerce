import { ReactNode } from "react";

export default function InlineBadge({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 rounded border bg-gray-100 px-1.5 py-0.5">
      {children}
    </span>
  );
}
