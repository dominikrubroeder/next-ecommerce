import { redirect } from "next/navigation";
import BackLink from "@/components/BackLink";
import { getProduct } from "@/lib/product";
import ProductTabs from "@/components/product/tabs/ProductTabs";
import type { Metadata } from "next";
import ProductImageGallery from "@/components/product/image-gallery/ProductImageGallery";
import { Suspense } from "react";
import ProductFAQsLoading from "@/components/product/faqs/ProductFAQsLoading";
import ProductFAQs from "@/components/product/faqs/ProductFAQs";

export const metadata: Metadata = {
  title: "Product | Next ecommerce",
};

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { product: string };
  searchParams: { tab: string | undefined };
}) {
  const product = await getProduct(params.product);

  if (product === null || product === undefined) return redirect("/");

  return (
    <div className="grid gap-4">
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Product</h1>

        <BackLink href="/products" />
      </div>

      <section className="grid gap-8 p-4 md:grid-cols-2 md:gap-4">
        <div className="grid gap-8">
          <ProductImageGallery
            images={product.images}
            productTitle={product.title}
          />

          <ProductTabs
            tabs={product.tabs}
            searchParamsTab={searchParams.tab}
            productPath={product.path}
          />
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2>{product.manufacturer}</h2>
            <small className="ml-2 text-gray-400">#{product.id}</small>
          </div>

          <h1 className="text-2xl">{product.title}</h1>

          <p>{product.description}</p>

          <div className="mt-5 space-y-6">
            <h2 className="border-b pb-5 font-bold">FAQs</h2>

            <Suspense fallback={<ProductFAQsLoading />}>
              <ProductFAQs productId={product.id.toString()} />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="flex min-h-dvh items-center justify-center">
        This is a new section
      </section>

      <section className="sticky bottom-0 z-50 flex items-center justify-end gap-4 border-t bg-white p-4">
        <div className="font-bold">{product.price} €</div>

        <button
          title="Add productId to Cart"
          className="rounded-xl border px-4 py-3"
        >
          Buy
        </button>
      </section>
    </div>
  );
}
