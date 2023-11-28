import Link from "next/link";

export default async function CategoryPage() {
  return (
    <div>
      <h1>Hello, world – All Categories</h1>
      <Link href="/category/snowboards">Show snowboards</Link>
    </div>
  );
}
