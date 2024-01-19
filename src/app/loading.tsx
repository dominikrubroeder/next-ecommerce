export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Home</h1>
      </div>

      <section className="animate-pulse px-4">
        <div className="h-6 w-full rounded-2xl border bg-gray-100"></div>
      </section>
    </div>
  );
}
