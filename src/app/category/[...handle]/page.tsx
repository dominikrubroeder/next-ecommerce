export default async function CategoryPage({
  params,
}: {
  params: { handle: string };
}) {
  return (
    <div>
      <h1>Hello, world – Category `{params.handle}`</h1>
    </div>
  );
}
