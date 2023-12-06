import { Product } from "@/interfaces";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function ProductCard({ product }: { product: Product }) {
  if (product === undefined) return null;

  return (
    <div className="grid gap-4">
      <div className="relative min-h-[13rem] overflow-hidden rounded-2xl border p-4">
        {product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={`${product.title} preview image`}
            width={128}
            height={128}
            className="mx-auto object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PhotoIcon className="h-12 w-12 text-gray-300" />
          </div>
        )}
      </div>
      <div>
        <h2 className="font-bold">{product.title}</h2>
        <p>{product.price} €</p>
      </div>
    </div>
  );
}
