"use server";

import { Category, FAQ, Order, Product } from "@/interfaces";
import { promises as fs } from "fs";
import { unstable_noStore as noStore } from "next/cache";

export async function getData(): Promise<{
  products: Product[];
  categories: Category[];
  faqs: FAQ[];
  orders: Order[];
}> {
  noStore();

  if (process.env.NODE_ENV === "development") {
    const res = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
    return JSON.parse(res);
  } else {
    const res = await fetch("https://next-ecommerce-dr.vercel.app/data.json", {
      next: { revalidate: 300 },
    });
    return res.json();
  }
}

export async function getProducts(
  ids?: string[],
  forPageType?: "category" | "search",
  filterValue?: string,
): Promise<Product[]> {
  noStore();

  const { products } = await getData();

  if (ids)
    return products.filter((product) => ids.includes(product.id.toString()));

  if (forPageType === undefined || filterValue === undefined) {
    return products;
  }

  switch (forPageType) {
    case "category":
      return products.filter(
        (product) =>
          product.category.toLowerCase() === filterValue.toLowerCase(),
      );
    case "search":
      const productsByProductTitle = products.filter((product) =>
        product.title.toLowerCase().includes(filterValue.toLowerCase()),
      );

      if (productsByProductTitle.length > 0) return productsByProductTitle;

      const productsByCategory = products.filter((product) =>
        product.category.toLowerCase().includes(filterValue.toLowerCase()),
      );

      if (productsByCategory.length > 0) return productsByCategory;

      const productsById = products.filter(
        (product) => product.id.toString() === filterValue.toLowerCase(),
      );

      if (productsById.length > 0) return productsById;

      return [];
    default:
      return products;
  }
}

export async function getCategories(): Promise<Category[]> {
  noStore();

  const { categories } = await getData();
  return categories;
}

export async function getFAQs(forProduct: string) {
  noStore();

  const { faqs } = await getData();

  if (forProduct)
    return faqs.filter((faq) => faq.products.includes(forProduct));

  return faqs;
}

export async function getOrder(id: string) {
  noStore();

  const { orders } = await getData();

  return orders.find((order) => order.id === id);
}

export async function getOrders(ids?: string[]) {
  noStore();

  const { orders } = await getData();

  if (ids) return orders.filter((order) => ids.includes(order.id));

  return orders;
}
