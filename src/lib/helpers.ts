import { Product } from "@/interfaces";

export const formatProductTitle = (productTitle: string) => {
  return productTitle.toLowerCase().trim().replaceAll(" ", "-");
};

export const filterProducts = (
  products: Product[],
  filter: string | string[] | undefined,
  sorting: string | string[] | undefined,
) => {
  if (filter === undefined && sorting === undefined)
    return products.sort((productA, productB) =>
      productA.title.localeCompare(productB.title),
    );

  let filteredProducts: Product[];
  switch (filter) {
    case "price-under-50":
      filteredProducts = products.filter((product) => product.price < 50);
      break;
    case "price-50-100":
      filteredProducts = products.filter(
        (product) => product.price > 50 && product.price < 100,
      );
      break;
    case "price-over-100":
      filteredProducts = products.filter((product) => product.price > 100);
      break;
    default:
      filteredProducts = products;
  }

  if (sorting === undefined) return filteredProducts;

  let sortedProducts: Product[];
  switch (sorting) {
    case "titleDescending":
      sortedProducts = filteredProducts.sort((productA, productB) =>
        productA.title.localeCompare(productB.title),
      );
      break;
    case "titleAscending":
      sortedProducts = filteredProducts.sort((productA, productB) =>
        productB.title.localeCompare(productA.title),
      );
      break;
    case "New":
      sortedProducts = [
        ...filteredProducts.filter((product) => product.price < 100),
        ...filteredProducts.filter((product) => product.price > 100),
      ];
      break;
    default:
      sortedProducts = filteredProducts;
  }

  return sortedProducts;
};

export function selectedClassName(
  index: number,
  tabTitle: string,
  searchParamsTab: undefined | string,
) {
  return (index === 0 && searchParamsTab === undefined) ||
    tabTitle.toLowerCase() === searchParamsTab?.toLowerCase()
    ? "bg-gray-100"
    : "bg-transparent";
}
