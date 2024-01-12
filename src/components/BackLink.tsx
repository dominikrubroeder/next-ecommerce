import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BackLink({
  href,
  label,
}: {
  href: string;
  label?: string;
}) {
  const url = href.replace("/", "");

  return (
    <Link
      href={href}
      className="my-4 flex items-center gap-2"
      title={`Go back to ${url} page`}
      aria-label={`Go back to ${url} page`}
    >
      <ArrowLongLeftIcon
        className="h-5 w-5"
        title="Arrow long left icon"
        aria-label="Arrow long left icon"
      />
      {label ?? "Back"}
    </Link>
  );
}
