import Link from "next/link";
import Search from "@/components/search/Search";
import { Suspense } from "react";
import StoryblokNavigation from "@/components/navigation/storyblok-navigation/StoryblokNavigation";
import StoryblokNavigationLoading from "@/components/navigation/storyblok-navigation/StoryblokNavigationLoading";
import Logo from "@/components/Logo";
import LoginLink from "@/components/auth/LoginLink";

export default function Header() {
  return (
    <header className="mb-5 xl:mb-0 xl:flex xl:items-center xl:justify-between">
      <div className="grid gap-2 p-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <Logo />

        <nav>
          <ul className="flex items-center gap-2">
            <li className="inline-block">
              <Link
                href="/categories"
                title="Go to all Categories"
                aria-label="Go to all Categories"
              >
                Categories
              </Link>
            </li>

            <li className="inline-block">
              <Link
                href="/products"
                title="Go to all Products"
                aria-label="Go to all Products"
              >
                Products
              </Link>
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
          <LoginLink />

          <Link
            href="/cart"
            title="Go to your Cart"
            aria-label="Go to your Cart"
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
