import Link from "next/link";

export default async function AuthLink() {
  return (
    <Link
      href="/account"
      title="Go to my Acctount page"
      aria-label="Go to my Account page"
    >
      Account
    </Link>
  );
}
