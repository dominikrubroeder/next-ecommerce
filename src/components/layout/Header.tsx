import Link from "next/link";
import Search from "@/components/search/Search";
import { Suspense } from "react";
import StoryblokNavigation from "@/components/navigation/StoryblokNavigation";
import StoryblokNavigationLoading from "@/components/navigation/StoryblokNavigationLoading";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="grid gap-2 p-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:p-0 sm:pr-4">
      <div className="grid gap-2 p-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <Logo />

        <nav>
          <ul className="flex flex-wrap gap-2">
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>

            <Suspense fallback={<StoryblokNavigationLoading />}>
              <StoryblokNavigation />
            </Suspense>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Search placeholder="Products..." />

        <Link href="/account">Account</Link>

        <Link href="/cart">Cart</Link>
      </div>
    </header>
  );
}
