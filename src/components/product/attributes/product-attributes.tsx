"use client";

import ProductSizes from "@/components/product/attributes/sizes/product-sizes";
import ProductColors from "@/components/product/attributes/colors/product-colors";

export default function ProductAttributes({
  productAttributes,
}: {
  productAttributes: {
    sizes?: string[] | undefined;
    colors?: string[] | undefined;
  };
}) {
  return (
    <ul className="space-y-4">
      <li>
        <ProductSizes sizes={productAttributes.sizes} />
      </li>

      <li>
        <ProductColors colors={productAttributes.colors} />
      </li>
    </ul>
  );
}
