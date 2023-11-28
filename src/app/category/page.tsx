import Link from "next/link";
import { getCategories } from "@/src/lib";

export default async function CategoryPage() {
  const categories = await getCategories();

  return (
    <div className="p-4">
      <h1 className="text-2xl">Hello, world – All Categories</h1>

      <ul className="mt-4 grid gap-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={category.fullPath}>Show {category.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
