import { Product } from "@/interfaces";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Product({ product }: { product: Product }) {
  return (
    <Link
      href={product.path}
      className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-gray-100"
      title={`Go to ${product.title} page`}
    >
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border p-2">
        {product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={`${product.title} preview image`}
            width={32}
            height={32}
            className="mx-auto h-8 w-8 object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PhotoIcon className="h-8 w-8 text-gray-300" />
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <h2 className="font-bold">{product.title}</h2>
        <p>{product.price} €</p>
      </div>
    </Link>
  );
}
