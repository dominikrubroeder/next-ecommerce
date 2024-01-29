export type SortingOption = {
  title: "Title descending" | "Title ascending";
  value: "titleDescending" | "titleAscending";
  icon: string;
};

export type FilterValue =
  | "price-under-50"
  | "price-50-100"
  | "price-over-100"
  | "color-red"
  | "color-blue";

export type FilterOption = {
  group: "Price" | "Color";
  title:
    | "Price under 50"
    | "Price 50 - 100"
    | "Price over 100"
    | "Color Red"
    | "Color Blue";
  value: FilterValue;
};

export type Provider = "github";

export type Brand = Provider;

export type ProductAttributes = {
  sizes?: string[] | undefined;
  colors?: string[] | undefined;
};
