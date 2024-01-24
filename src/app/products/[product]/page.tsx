import { redirect } from "next/navigation";
import BackLink from "@/components/BackLink";
import { getProduct } from "@/lib/product";
import ProductTabs from "@/components/product/tabs/ProductTabs";
import type { Metadata } from "next";
import ProductImageGallery from "@/components/product/image-gallery/ProductImageGallery";
import { Suspense } from "react";
import ProductFAQsLoading from "@/components/product/faqs/ProductFAQsLoading";
import ProductFAQs from "@/components/product/faqs/ProductFAQs";
import BuyBar from "@/components/product/buy-bar/BuyBar";
import CheckoutDialog from "@/components/checkout/CheckoutDialog";
import ProductAttributes from "@/components/product/attributes/ProductAttributes";

export const metadata: Metadata = {
  title: "Product | Next ecommerce",
};

/**
 * The Product Page focuses on two things:
 * - Buy Conversion
 * - Inform, Market, and inspire the User of the Product
 * - BuyBar.tsx focuses on making the Product configuration accessible as easy as possible to the user
 * - With that out of the way, the other space on the Product Page can focus on Marketing Material and Inform, inspire the user about the Product
 * @param params
 * @param searchParams
 */
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
    <div>
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Product</h1>

        <BackLink href="/products" />
      </div>

      <section className="grid gap-8 p-4 md:grid-cols-2 md:gap-4">
        <div>
          <div className="sticky top-0">
            <ProductImageGallery
              images={product.images}
              productTitle={product.title}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2>{product.manufacturer}</h2>
            <small className="ml-2 text-gray-400">#{product.id}</small>
          </div>

          <h1 className="text-2xl">{product.title}</h1>

          <p>{product.description}</p>

          {product.attributes && (
            <section className="mt-5 space-y-2">
              <h2 className="sticky top-0 border-b bg-white py-5 font-bold">
                Attributes
              </h2>
              <ProductAttributes productAttributes={product.attributes} />
            </section>
          )}

          {product.tabs.length > 0 && (
            <section className="mt-5 space-y-2">
              <h2 className="sticky top-0 border-b bg-white py-5 font-bold">
                Tabs
              </h2>
              <ProductTabs tabs={product.tabs} />
            </section>
          )}

          <section className="mt-5 space-y-6">
            <h2 className="sticky top-0 border-b bg-white py-5 font-bold">
              FAQs
            </h2>
            <Suspense fallback={<ProductFAQsLoading />}>
              <ProductFAQs productId={product.id.toString()} />
            </Suspense>
          </section>
        </div>
      </section>

      <BuyBar product={product} />

      {/* This is a new section which is focused on Marketing and Information materials. That's why the sticky `BuyBar` stops scrolling here.
          But you could of course also move the `BuyBar` down to the bottom entirely, so the BuyBar will be visible at all time at the bottom of the page
      */}

      <section className="mt-20 min-h-dvh">
        <div className="sticky top-0 mx-5 border-b py-5">
          <div className="flex flex-wrap items-center gap-2">
            <h3>Secondary navigation</h3>
            <span className="block h-1 w-1 shrink-0 rounded-full bg-gray-300"></span>
            <span className="text-gray-400">
              You can show a sub-navigation here. For Products heavy on
              marketing and information materials.
            </span>
          </div>
        </div>

        {/* Content could come from Storyblok, headless CMS, ... f.e. */}
        <div className="flex min-h-dvh items-center justify-center">
          This is a new marketing focused section
        </div>
      </section>

      {/* Add Marketing placeholders here */}

      {/* Add recommended slider here */}

      <CheckoutDialog />
    </div>
  );
}
