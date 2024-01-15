import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Next ecommerce",
};

export default function SearchPage() {
  return (
    <section className="grid gap-4 px-4">
      <h1 className="border-b pb-5 text-4xl">Search</h1>
      <p>Search for something.</p>
    </section>
  );
}
