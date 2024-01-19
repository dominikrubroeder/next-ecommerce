import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import AuthForm from "@/components/auth/AuthForm";
import SignOutButton from "@/components/auth/SignOutButton";

export const metadata: Metadata = {
  title: "Your Account | Next ecommerce",
};
export default async function AccountPage() {
  const session = await getServerSession();

  return (
    <>
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Account</h1>

        <section className="py-4">
          {session ? (
            <>
              <div>User: {session?.user?.name}</div>
              <div>Email: {session?.user?.email}</div>
            </>
          ) : (
            <AuthForm />
          )}
        </section>
      </div>

      {session ? (
        <div className="fixed bottom-0 flex w-full items-center justify-end border-t bg-white p-4">
          <SignOutButton />
        </div>
      ) : null}
    </>
  );
}
