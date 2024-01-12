import Link from "next/link";
import Search from "@/components/search/Search";

export default function Header() {
  return (
    <header className="grid gap-2 p-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
      <nav>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <Search placeholder="Products..." />

        <Link href="/account">Account</Link>

        <Link href="/cart">Cart</Link>
      </div>
    </header>
  );
}
