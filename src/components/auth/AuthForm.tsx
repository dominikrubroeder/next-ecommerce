import SignInAction from "@/components/auth/SignInAction";

export default function AuthForm() {
  return (
    <div className="mx-auto grid max-w-xs gap-2">
      <input
        type="email"
        className="rounded-xl border px-4 py-3"
        placeholder="Email"
        required
      />

      <input
        type="password"
        className="rounded-xl border px-4 py-3"
        placeholder="Password"
        required
      />

      <button
        type="button"
        className="rounded-xl bg-accent px-4 py-3 text-white"
      >
        Login
      </button>

      <SignInAction provider="github" />
    </div>
  );
}
