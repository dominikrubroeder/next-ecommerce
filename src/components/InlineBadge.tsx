export default function InlineBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="mx-1 rounded bg-gray-100 px-1.5 py-0.5">{children}</span>
  );
}
