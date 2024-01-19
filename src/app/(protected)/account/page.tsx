import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import AuthButton from "@/components/auth/AuthButton";

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
            <AuthButton />
          )}
        </section>
      </div>

      {session ? (
        <div className="fixed bottom-0 flex w-full items-center justify-end border-t bg-white p-4">
          <AuthButton />
        </div>
      ) : null}
    </>
  );
}
