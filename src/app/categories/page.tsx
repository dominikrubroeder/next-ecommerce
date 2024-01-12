import { Suspense } from "react";
import CategoriesLoading from "@/components/categories/CategoriesLoading";
import Categories from "@/components/categories/Categories";

export const dynamic = "force-dynamic";

export default function CategoryPage() {
  return (
    <section className="px-4">
      <h1 className="border-b pb-5 text-4xl">Categories</h1>

      <Suspense fallback={<CategoriesLoading />}>
        <Categories />
      </Suspense>
    </section>
  );
}
