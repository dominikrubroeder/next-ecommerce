import { signOut } from "@/auth";

export default function SignOutAction() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" title="Sign out" aria-label="Sign out">
        Sign out
      </button>
    </form>
  );
}
