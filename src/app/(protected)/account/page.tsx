import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";
import { useSession } from "@/hooks/useSession";
import Collapsable from "@/components/Collapsable";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Account | Next ecommerce",
};
export default async function AccountPage() {
  const { session, user } = await useSession();

  const today = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return session ? (
    <div className="mt-4 grid gap-8">
      <div className="mx-4">
        <div>{user?.email}</div>
        <h1 className="text-2xl">{user?.name}</h1>
      </div>

      <section className="ml-4 overflow-hidden">
        <ul className="no-scrollbar w-full space-x-4 overflow-auto whitespace-nowrap pr-4">
          <li className="inline-block">
            <Link
              href={`/account/order?id=xyz`}
              className="group relative inline-block h-96 w-96 rounded-xl border"
            >
              <div className="absolute bottom-0 left-0 right-0 flex w-full justify-between gap-4 rounded-b-xl p-8 transition group-hover:bg-gray-100">
                <div>
                  <h3>
                    Order <span className="font-bold">XYZ</span>
                  </h3>
                  <p>{today}</p>
                  <p className="font-bold">234,99 €</p>
                </div>

                <ArrowRightIcon className="h-4 w-4 text-accent" />
              </div>
            </Link>
          </li>
          <li className="inline-block">
            <div className="relative h-96 w-96 rounded-xl border"></div>
          </li>
          <li className="inline-block">
            <div className="relative h-96 w-96 rounded-xl border"></div>
          </li>
          <li className="inline-block">
            <div className="relative h-96 w-96 rounded-xl border"></div>
          </li>
        </ul>
      </section>

      <div className="mx-4 grid gap-0">
        <Collapsable as="div" title="Personal Data">
          <div className="ml-5 mt-4">Content here</div>
        </Collapsable>

        <Collapsable as="div" title="Payment">
          <div className="ml-5 mt-4">Content here</div>
        </Collapsable>

        <Collapsable as="div" title="Address">
          <div className="ml-5 mt-4">Content here</div>
        </Collapsable>
      </div>
    </div>
  ) : (
    <section className="p-4">
      <AuthForm />
    </section>
  );
}
