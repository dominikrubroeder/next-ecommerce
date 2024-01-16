import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Account | Next ecommerce",
};
export default function AccountPage() {
  return (
    <div className="px-4">
      <h1 className="border-b pb-5 text-4xl">Account</h1>
    </div>
  );
}
