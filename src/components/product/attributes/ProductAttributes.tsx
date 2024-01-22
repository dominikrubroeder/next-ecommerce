import ProductSizes from "@/components/product/attributes/sizes/ProductSizes";
import ProductColors from "@/components/product/attributes/colors/ProductColors";

export default function ProductAttributes({
  productAttributes,
}: {
  productAttributes: {
    sizes?: string[] | undefined;
    colors?: string[] | undefined;
  };
}) {
  return (
    <div className="overflow-hidden">
      <ul className="grid gap-4 lg:flex lg:items-center lg:gap-8 lg:overflow-auto lg:whitespace-nowrap">
        <li className="inline-block">
          <ProductSizes sizes={productAttributes.sizes} />
        </li>

        <li className="inline-block">
          <ProductColors colors={productAttributes.colors} />
        </li>
      </ul>

      <div className="mt-6 flex gap-4 lg:hidden">
        <div>Attributes:</div>
        <ul className="flex gap-4">
          <li className="inline-block text-orange-400">Sizes</li>
          <li className="inline-block text-orange-400">Colors</li>
        </ul>
      </div>
    </div>
  );
}
