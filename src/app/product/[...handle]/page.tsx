import { Suspense } from "react";
import Loading from "@/app/product/[...handle]/loading";
import { getProduct } from "@/lib";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import Tabs from "@/components/Tabs";
import ProductImageGallery from "@/components/ProductImageGallery";

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
        <Link href="/category" className="flex items-center gap-2">
          <ArrowLongLeftIcon className="h-5 w-5" />
          Back
        </Link>
      </div>

      <section className="grid gap-8 p-4 md:grid-cols-2 md:gap-0">
        <ProductImageGallery
          images={product?.images}
          productTitle={product?.title}
        />

        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2>{product?.manufacturer}</h2>
            <small className="ml-2 text-gray-400">{product?.id}</small>
          </div>

          <h1 className="text-2xl">{product?.title}</h1>

          <p>{product?.description}</p>

          <ul className="mt-4 grid gap-2">
            <li>
              <Accordion title="Description">{product?.description}</Accordion>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-4">
        <Tabs tabs={product?.tabs} />
      </section>
    </Suspense>
  );
}
