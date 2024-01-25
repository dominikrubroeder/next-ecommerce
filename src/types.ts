export type SortingOption = {
  title: "Title descending" | "Title ascending";
  value: "titleDescending" | "titleAscending";
  icon: string;
};

export type FilterOption = {
  group: "Price" | "Color";
  title:
    | "Price under 50"
    | "Price 50 - 100"
    | "Price over 100"
    | "Red"
    | "Blue";
  value: "price-under-50" | "price-50-100" | "price-over-100" | "red" | "blue";
};

export type Provider = "github";

export type Brand = Provider;
