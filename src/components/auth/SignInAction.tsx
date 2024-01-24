import Brand from "@/components/Brand";
import type { Provider } from "@/types";
import { signIn } from "@/auth";

export default function SignInAction({ provider }: { provider: Provider }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <p>You are not logged in</p>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-2xl border px-4 py-3"
        title={`Sign in with ${provider}`}
        aria-label={`Sign out from ${provider}`}
      >
        <Brand brand={provider} /> Sign in with {provider}
      </button>
    </form>
  );
}
