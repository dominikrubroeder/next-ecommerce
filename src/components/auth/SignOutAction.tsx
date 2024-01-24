import { ReactNode } from "react";
import { signOut } from "@/auth";

export default function SignOutAction({ children }: { children?: ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>{children}</p>
      <button type="submit" title="Sign out" aria-label="Sign out">
        Sign out
      </button>
    </form>
  );
}
