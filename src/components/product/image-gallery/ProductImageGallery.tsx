"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function ProductImageGallery({
  images,
  productTitle,
}: {
  images: string[];
  productTitle: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (images === null || images === undefined) return null;

  const selectedImage = isNaN(Number(searchParams.getAll("image")[0]))
    ? 0
    : Number(searchParams.getAll("image")[0]);

  const onClick = (value: string, withCleanUp?: boolean) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (withCleanUp) {
      for (const [key] of searchParams.entries()) {
        current.delete(key);
      }
    }

    if (!value) {
      current.delete("image");
    } else if (current.getAll("image").includes(value)) {
      current.delete("image", value);
    } else {
      current.set("image", value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  return images.length > 0 ? (
    <div>
      <div className="relative mx-auto h-80 w-80 sm:h-96 sm:w-96">
        <Image
          src={images[selectedImage ?? 0]}
          className="mx-auto object-contain"
          alt={`${productTitle} image ${selectedImage}`}
          fill
          priority
          draggable={false}
        />
      </div>

      <ul className="mx-auto mt-8 flex items-center justify-center gap-1.5">
        {[...Array(images.length).keys()].map((_, index) => (
          <li
            key={index}
            className={` cursor-pointer rounded-full transition ${
              index === selectedImage
                ? "h-3 w-3 bg-orange-400"
                : "h-2.5 w-2.5 bg-gray-100"
            }`}
            onClick={() => onClick(index.toString())}
          ></li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="mx-auto flex h-80 w-80 items-center justify-center rounded-2xl bg-gray-100 xl:h-96 xl:w-96">
      <PhotoIcon className="h-20 w-20 text-gray-200" />
    </div>
  );
}
