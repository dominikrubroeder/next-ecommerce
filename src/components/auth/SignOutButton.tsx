"use client";

import { signOut, useSession } from "next-auth/react";

export default function SignOutButton() {
  const { data: session } = useSession();

  return (
    <button
      title={`Sign out from ${session?.user?.name}`}
      aria-label={`Sign out from ${session?.user?.name}`}
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
