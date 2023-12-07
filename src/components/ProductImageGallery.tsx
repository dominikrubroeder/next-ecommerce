"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

  if (images === null || images === undefined || images.length === 0)
    return null;

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

  return (
    <div>
      <Image
        src={images[selectedImage ?? 0]}
        width="300"
        height="300"
        className="mx-auto object-contain"
        alt={`${productTitle} image ${selectedImage}`}
        priority
      />

      <ul className="mx-auto mt-8 flex items-center justify-center gap-1">
        {[...Array(images.length).keys()].map((_, index) => (
          <li
            key={index}
            className="h-3 w-3 cursor-pointer rounded-full bg-gray-100"
            onClick={() => onClick(index.toString())}
          ></li>
        ))}
      </ul>
    </div>
  );
}
