export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Hello, world – Product `{params.handle}`</h1>
    </div>
  );
}
