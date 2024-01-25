import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";
import SignOutAction from "@/components/auth/sign-out-action";
import { useSession } from "@/hooks/useSession";

export const metadata: Metadata = {
  title: "Your Account | Next ecommerce",
};
export default async function AccountPage() {
  const { session, user } = await useSession();

  return (
    <>
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Account</h1>

        <section className="py-4">
          {session ? (
            <>
              <div>User: {user?.name}</div>
              <div>Email: {user?.email}</div>
            </>
          ) : (
            <AuthForm />
          )}
        </section>
      </div>

      {session ? (
        <div className="fixed bottom-0 flex w-full items-center justify-end border-t bg-white p-4">
          <SignOutAction />
        </div>
      ) : null}
    </>
  );
}
