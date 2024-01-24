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

export function selectedTabClassName(
  index: number,
  tabTitle: string,
  searchParamsTab: string | null,
) {
  return (index === 0 && searchParamsTab === null) ||
    tabTitle.toLowerCase() === searchParamsTab?.toLowerCase()
    ? "bg-gray-100 border-gray-200"
    : "bg-transparent border-transparent";
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const formatSearchTerm = (
  searchTerm: string | undefined,
  as: "url" | "output",
) => {
  if (searchTerm === undefined) return null;

  if (as === "url")
    return searchTerm.trim().replaceAll(" ", "-").replaceAll("%20%", "-");

  return searchTerm.replaceAll("%20%", " ").replaceAll("-", " ");
};
