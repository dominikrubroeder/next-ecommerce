import { Suspense } from "react";
import Loading from "@/src/app/product/[...handle]/loading";
import { getProduct } from "@/src/lib";
import InlineBadge from "@/src/components/InlineBadge";

export default async function ProductPage({
  params,
}: {
  params: { handle: string[] };
}) {
  const product = await getProduct(params.handle[0]);

  if (product === undefined) return null;

  return (
    <Suspense fallback={<Loading />}>
      <div className="p-4">
        <h1 className="text-2xl">
          Hello, world – Product `{product.title}`
          <small className="ml-2">
            <InlineBadge>{product.id}</InlineBadge>
          </small>
        </h1>
      </div>
    </Suspense>
  );
}
