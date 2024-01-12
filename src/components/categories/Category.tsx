import Link from "next/link";
import { Category } from "@/interfaces";

export default function Category({ category }: { category: Category }) {
  return (
    <Link
      href={category.path}
      title={`Go to category ${category.title}`}
      aria-label={`Go to category ${category.title}`}
    >
      Show {category.title}
    </Link>
  );
}
