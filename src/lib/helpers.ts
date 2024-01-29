import { Product } from "@/interfaces";
import { FilterValue } from "@/types";

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

  let filteredProducts: Product[] = [];

  if (typeof filter === "string") {
    switch (filter as FilterValue) {
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
      case "color-red":
        filteredProducts = products.filter(
          (product) => product.attributes.colors?.includes("red"),
        );
        break;
      case "color-blue":
        filteredProducts = products.filter(
          (product) => product.attributes.colors?.includes("blue"),
        );
        break;
      default:
        filteredProducts = products;
    }
  }

  if (typeof filter === "object") {
    filteredProducts = products;
    return filteredProducts;
    /**
         products.map((product) => {
         for (const property in product.attributes) {
         const propertyValue = product.attributes[property];

         filter.map((currentFilter) => {
         const currentFilterValue = currentFilter.split("-")[1];
         console.log("CURRENT_FILTER_VALUE:", currentFilterValue);
         if ((propertyValue as string).includes(currentFilterValue)) {
         if (
         !products.find(
         (currentProduct) => currentProduct.id === product.id,
         )
         ) {
         filteredProducts.push(product);
         }
         }
         });
         }
         });
         */
  }

  if (filter === undefined) {
    filteredProducts = products;
  }

  if (sorting === undefined) return filteredProducts;

  let sortedProducts: Product[];
  switch (sorting) {
    case "titleAscending":
      sortedProducts = filteredProducts.sort((productA, productB) =>
        productA.title.localeCompare(productB.title),
      );
      break;
    case "titleDescending":
      sortedProducts = filteredProducts.sort((productA, productB) =>
        productB.title.localeCompare(productA.title),
      );
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
