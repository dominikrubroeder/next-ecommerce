"use server";

import { Product } from "@/interfaces";
import { formatProductTitle } from "@/lib/helpers";
import { getData } from "@/lib/index";

export async function getProduct(handle: string): Promise<Product | undefined> {
  const { products } = await getData();

  return products.find(
    (product) =>
      product.id.toString() === handle ||
      formatProductTitle(product.title) === formatProductTitle(handle),
  );
}

export async function getProductTabs(productId: string) {
  const { products } = await getData();

  const product = products.find(
    (product) =>
      product.id.toString() === productId ||
      formatProductTitle(product.title) === formatProductTitle(productId),
  );

  return product?.tabs;
}
