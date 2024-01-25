"use client";

import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function ProductImageGallery({
  images,
  productTitle,
}: {
  images: string[];
  productTitle: string;
}) {
  // Make this sticky
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  if (images === null || images === undefined) return null;

  const selectedImage = isNaN(Number(searchParams.getAll("image")[0]))
    ? 0
    : Number(searchParams.getAll("image")[0]);

  return images.length > 0 ? (
    <div className="pt-5">
      <div className="relative mx-auto">
        <Image
          src={images[selectedImage ?? 0]}
          className="mx-auto h-80 w-80 object-contain sm:h-96 sm:w-96"
          alt={`${productTitle} image ${selectedImage}`}
          width={320}
          height={320}
          priority
          draggable={false}
        />
      </div>

      <ul className="mx-auto mt-8 flex items-center justify-center gap-1.5">
        {[...Array(images.length).keys()].map((_, index) => (
          <li
            key={index}
            className={` cursor-pointer rounded-full border transition ${
              index === selectedImage
                ? "h-3 w-3 border-transparent bg-orange-400"
                : "h-2.5 w-2.5 bg-gray-100"
            }`}
            onClick={() =>
              updateSearchParams({
                withName: "image",
                withValue: index.toString(),
              })
            }
          ></li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="mx-auto flex h-80 w-80 items-center justify-center rounded-2xl border bg-gray-100 xl:h-96 xl:w-96">
      <PhotoIcon className="h-20 w-20 text-gray-200" />
    </div>
  );
}
