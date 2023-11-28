export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  return (
    <div>
      <h1>Hello, world – Product `{params.handle}`</h1>
    </div>
  );
}
