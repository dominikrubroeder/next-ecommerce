import { ReactNode } from "react";
import { useSession } from "@/hooks/useSession";
import SignOutAction from "@/components/auth/sign-out-action";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default async function Layout({ children }: { children: ReactNode }) {
  const { session, user } = await useSession();

  return (
    <div>
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Account</h1>
      </div>

      {children}

      {session ? (
        <div className="fixed bottom-0 flex w-full items-center justify-between border-t bg-white p-4">
          <Link href="/account" className="flex items-center gap-4">
            <ArrowLeftIcon className="h-4 w-4 shrink-0 text-accent" /> Account
          </Link>

          <SignOutAction />
        </div>
      ) : null}
    </div>
  );
}
