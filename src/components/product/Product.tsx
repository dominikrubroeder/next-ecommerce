import { Product } from "@/interfaces";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Product({ product }: { product: Product }) {
  return (
    <Link
      href={product.fullPath}
      className="grid gap-4"
      title={`Go to ${product.title} page`}
    >
      <div className="relative min-h-[13rem] overflow-hidden rounded-2xl p-4">
        {product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={`${product.title} preview image`}
            width={128}
            height={128}
            className="mx-auto object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center border">
            <PhotoIcon className="h-12 w-12 text-gray-300" />
          </div>
        )}
      </div>
      <div>
        <h2 className="font-bold">{product.title}</h2>
        <p>{product.price} €</p>
      </div>
    </Link>
  );
}
