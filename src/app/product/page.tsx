import Link from "next/link";

export default async function ProductPage() {
  return (
    <div>
      <h1>Hello, world – All products, no matter the category</h1>
      <Link href="/product/1">Show Product 1</Link>
    </div>
  );
}
