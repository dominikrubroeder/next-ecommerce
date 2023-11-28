export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  variants: Product[];
  manufacturer: string;
  fullPath: string;
  category: string;
  images: string[];
  galleryImages: string[];
}

export interface Category {
  id: number;
  title: string;
  fullPath: string;
}
