import ProductImageGallery from "@/components/product/image-gallery/ProductImageGallery";
import Accordion from "@/components/Accordion";
import { Product } from "@/interfaces";

export default function ProductHero({ product }: { product: Product }) {
  return (
    <div className="grid gap-8 p-4 md:grid-cols-2 md:gap-0">
      <ProductImageGallery
        images={product.images}
        productTitle={product.title}
      />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2>{product.manufacturer}</h2>
          <small className="ml-2 text-gray-400">{product.id}</small>
        </div>

        <h1 className="text-2xl">{product.title}</h1>

        <p>{product.description}</p>

        <ul className="mt-4 grid gap-2">
          <li>
            <Accordion title="Description">{product.description}</Accordion>
          </li>
        </ul>
      </div>
    </div>
  );
}
