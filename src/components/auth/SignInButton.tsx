"use client";

import { signIn } from "next-auth/react";
import Brand from "@/components/Brand";
import type { Provider } from "@/types";

export default function SignInButton({ provider }: { provider: Provider }) {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-2xl border px-4 py-3"
      title={`Sign in with ${provider}`}
      aria-label={`Sign out from ${provider}`}
      onClick={() => signIn(provider)}
    >
      <Brand brand={provider} /> Sign in with {provider}
    </button>
  );
}
