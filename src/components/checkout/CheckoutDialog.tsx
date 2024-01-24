"use client";

import { useSession } from "next-auth/react";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function CheckoutDialog() {
  const { data } = useSession();
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  const appear = searchParams.get("instantCheckout");

  if (!appear || appear !== "true") return null;

  {
    /* Show black background behind Dialog modal */
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/10"
      onClick={() =>
        updateSearchParams({
          withName: "instantCheckout",
          withValue: "false",
        })
      }
    >
      <dialog
        className="no-scrollbar animate-fade-up h-[50dvh] w-[40dvw] overflow-y-auto overflow-x-hidden rounded-2xl bg-white"
        open
      >
        <header className="sticky top-0 z-10 border-b bg-white px-8 py-6">
          <h2 className="text-4xl">Checkout</h2>
        </header>

        <div className="space-y-8">
          <section className="mt-4 px-8">
            <h2 className="sticky top-0 mb-4 border-b pb-2">Login</h2>
            <div className="grid gap-4">
              <p>{data?.user?.name}</p>
              <p>{data?.user?.email}</p>
              {/* Pay with Apple, PayPal Express, Amazon Pay etc... */}
              <div className="min-w-xs h-8 animate-pulse rounded-full border bg-gray-100"></div>
              <div className="min-w-xs h-8 animate-pulse rounded-full border bg-gray-100"></div>
            </div>
          </section>

          <section className="mt-4 px-8">
            <h2 className="sticky top-0 mb-4 border-b pb-2">Cart</h2>
            <div className="min-w-xs h-8 animate-pulse rounded-full border bg-gray-100"></div>
          </section>

          <section className="mt-4 px-8">
            <h2 className="sticky top-0 mb-4 border-b pb-2">Payment</h2>
            <div className="min-w-xs h-8 animate-pulse rounded-full border bg-gray-100"></div>
          </section>

          <section className="mt-4 px-8">
            <h2 className="sticky top-0 mb-4 border-b pb-2">Shipping</h2>
            <div className="min-w-xs h-8 animate-pulse rounded-full border bg-gray-100"></div>
          </section>

          <section className="mt-4 px-8">
            <h2 className="sticky top-0 mb-4 border-b pb-2">Summary</h2>
            <div className="min-w-xs h-8 animate-pulse rounded-full border bg-gray-100"></div>
          </section>
        </div>

        <footer className="sticky bottom-0 flex items-center justify-between border-t bg-white px-4 py-3">
          <button className="px-4 py-3 text-gray-400 transition hover:text-black">
            <span>Continue Shopping</span>
          </button>

          <div>
            <span className="mr-4">
              Total: <b>19.99€</b>
            </span>
            <button className="rounded-2xl bg-accent px-4 py-3 text-white">
              <span>Submit Order</span>
            </button>
          </div>
        </footer>
      </dialog>
    </div>
  );
}
