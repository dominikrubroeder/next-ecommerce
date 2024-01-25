import { getCategories } from "@/lib";
import Category from "@/components/categories/category";

export default async function Categories() {
  const categories = await getCategories();

  if (
    categories === null ||
    categories === undefined ||
    categories.length === 0
  )
    return null;

  return (
    <ul
      className="mt-4 grid gap-2"
      title="All categories"
      aria-label="All categories"
    >
      {categories.map((category) => (
        <li key={category.id}>
          <Category category={category} />
        </li>
      ))}
    </ul>
  );
}
