import Link from "next/link";

export default function CartPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Hello, world – Cart</h1>
      <Link href="/checkout">Checkout</Link>
    </div>
  );
}
