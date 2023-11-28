export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  variants: Product[];
  manufacturer: string;
  fullPath: string;
}
