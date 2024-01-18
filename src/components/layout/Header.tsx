import Link from "next/link";
import Search from "@/components/search/Search";
import { Suspense } from "react";
import StoryblokNavigation from "@/components/navigation/storyblok-navigation/StoryblokNavigation";
import StoryblokNavigationLoading from "@/components/navigation/storyblok-navigation/StoryblokNavigationLoading";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="mb-5 xl:flex xl:items-center xl:justify-between">
      <div className="grid gap-2 p-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <Logo />

        <nav>
          <ul className="flex items-center gap-2">
            <li className="inline-block">
              <Link href="/categories">Categories</Link>
            </li>

            <li className="inline-block">
              <Link href="/products">Products</Link>
            </li>

            <li>
              <Suspense fallback={<StoryblokNavigationLoading />}>
                <StoryblokNavigation />
              </Suspense>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between gap-4 px-4">
        <Search placeholder="Search anything..." />

        <div className="space-x-4">
          <Link href="/account">Account</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </header>
  );
}
