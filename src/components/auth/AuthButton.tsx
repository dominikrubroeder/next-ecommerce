"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        title={`Sign out from ${session.user?.name}`}
        aria-label={`Sign out from ${session.user?.name}`}
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  }

  return (
    <button title="Sign in" aria-label="Sign in" onClick={() => signIn()}>
      Sign in
    </button>
  );
}
