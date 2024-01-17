import ProductImageGallery from "@/components/product/image-gallery/ProductImageGallery";
import { Product } from "@/interfaces";
import ProductFAQs from "@/components/product/faqs/ProductFAQs";
import { Suspense } from "react";
import ProductFAQLoading from "@/components/product/faqs/ProductFAQLoading";

export default function ProductHero({ product }: { product: Product }) {
  return (
    <div className="grid gap-8 p-4 md:grid-cols-2 md:gap-0">
      <ProductImageGallery
        images={product.images}
        productTitle={product.title}
      />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2>{product.manufacturer}</h2>
          <small className="ml-2 text-gray-400">#{product.id}</small>
        </div>

        <h1 className="text-2xl">{product.title}</h1>

        <p>{product.description}</p>

        <section className="mt-5 space-y-6">
          <h2 className="border-b pb-5 font-bold">FAQs</h2>

          <Suspense fallback={<ProductFAQLoading />}>
            <ProductFAQs productId={product.id.toString()} />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
