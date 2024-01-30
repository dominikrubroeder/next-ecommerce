import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";
import SignOutAction from "@/components/auth/sign-out-action";
import { useSession } from "@/hooks/useSession";
import Collapsable from "@/components/Collapsable";

export const metadata: Metadata = {
  title: "Your Account | Next ecommerce",
};
export default async function AccountPage() {
  const { session, user } = await useSession();

  return (
    <>
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Account</h1>

        {session ? (
          <div className="mt-4 grid gap-8">
            <div>
              <div>{user?.email}</div>
              <h1 className="text-2xl">{user?.name}</h1>
            </div>

            <section className="overflow-hidden">
              <ul className="no-scrollbar w-full space-x-4 overflow-auto whitespace-nowrap">
                <li className="inline-block">
                  <div className="h-96 w-96 rounded-xl border"></div>
                </li>
                <li className="inline-block">
                  <div className="h-96 w-96 rounded-xl border"></div>
                </li>
                <li className="inline-block">
                  <div className="h-96 w-96 rounded-xl border"></div>
                </li>
                <li className="inline-block">
                  <div className="h-96 w-96 rounded-xl border"></div>
                </li>
              </ul>
            </section>

            <div className="grid gap-0">
              <Collapsable as="div" title="Personal Data">
                <div className="ml-5 mt-4">Content here</div>
              </Collapsable>

              <Collapsable as="div" title="Payment">
                <div className="ml-5 mt-4">Content here</div>
              </Collapsable>
            </div>
          </div>
        ) : (
          <AuthForm />
        )}
      </div>

      {session ? (
        <div className="fixed bottom-0 flex w-full items-center justify-end border-t bg-white p-4">
          <SignOutAction />
        </div>
      ) : null}
    </>
  );
}
