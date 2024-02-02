import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";
import { useSession } from "@/hooks/useSession";
import Collapsable from "@/components/collapsable";
import { Suspense } from "react";
import Orders from "@/components/orders/orders";

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

      <Suspense fallback="Load orders...">
        <Orders />
      </Suspense>

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
