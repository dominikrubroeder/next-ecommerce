import { selectedClassName } from "@/lib/helpers";
import Link from "next/link";

export default function Tab({
  tab,
  searchParamsTab,
  index,
  productPath,
}: {
  tab: string;
  searchParamsTab: undefined | string;
  index: number;
  productPath: string;
}) {
  return (
    <Link
      href={`${productPath}?tab=${tab}`}
      className={`cursor-pointer rounded-2xl p-4 transition ${selectedClassName(
        index,
        tab,
        searchParamsTab,
      )}`}
      scroll={false}
    >
      {tab}
    </Link>
  );
}
