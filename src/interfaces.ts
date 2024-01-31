import { ProductAttributes } from "@/types";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  variants: Product[];
  manufacturer: string;
  path: string;
  category: string;
  images: string[];
  galleryImages: string[];
  tabs: { title: string; content: string }[];
  faqs: FAQ[];
  attributes: ProductAttributes;
}

export interface Category {
  id: number;
  title: string;
  path: string;
}

export interface FAQ {
  question: string;
  answer: string;
  products: string[];
}

export interface Order {
  id: string;
  ordered: string;
  products: string[];
  paymentStatus: "Waiting for Payment" | "Payment";
  paymentColor: "green-400" | "orange-400";
  paymentMethod: "Credit Card" | "PayPal" | "Invoice";
  paymentMethodOwner: string;
  shipmentStatus: "Order received" | "Packaged" | "In Transit" | "Shipped";
  shipmentStatusColor: "green-400" | "orange-400";
  shipmentAddress: string;
  sum: number;
}
