import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex flex-wrap gap-2 p-4">
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
    </header>
  );
}
