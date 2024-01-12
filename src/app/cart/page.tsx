import Link from "next/link";

export default function CartPage() {
  return (
    <div className="mx-4 flex items-center justify-between gap-4 border-b pb-5">
      <h1 className="text-4xl">Cart</h1>
      <Link href="/checkout">Checkout</Link>
    </div>
  );
}
