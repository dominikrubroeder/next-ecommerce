export default function ProductLoading() {
  return (
    <div className="grid max-w-72 animate-pulse gap-4">
      <div className="relative min-h-[13rem] overflow-hidden rounded-2xl border bg-gray-100 p-4"></div>
      <div className="grid gap-2">
        <h2 className="h-6 w-32 rounded-full border bg-gray-100"></h2>
        <p className="h-6 w-16 rounded-full border bg-gray-100"></p>
      </div>
    </div>
  );
}
