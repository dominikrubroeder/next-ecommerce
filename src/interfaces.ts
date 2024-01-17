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
