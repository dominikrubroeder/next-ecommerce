import Link from "next/link";
import Search from "@/components/Search";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2 p-4">
      <nav>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/category">Category</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading search...</div>}>
        <Search placeholder="Products ..." />
      </Suspense>
    </header>
  );
}
