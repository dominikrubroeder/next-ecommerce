import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Next ecommerce",
};
export default function CheckoutPage() {
  return (
    <div className="px-4">
      <h1 className="border-b pb-5 text-4xl">Checkout</h1>
    </div>
  );
}
