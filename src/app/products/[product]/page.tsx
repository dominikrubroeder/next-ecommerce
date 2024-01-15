import { redirect } from "next/navigation";
import BackLink from "@/components/BackLink";
import ProductHero from "@/components/product/hero/ProductHero";
import { getProduct } from "@/lib/product";
import Tabs from "@/components/product/tabs/Tabs";
import type { Metadata } from "next";

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

      <div>
        <section>
          <ProductHero product={product} />
        </section>

        <section className="p-4">
          <Tabs
            tabs={product.tabs}
            searchParamsTab={searchParams.tab}
            productPath={product.path}
          />
        </section>
      </div>
    </div>
  );
}
