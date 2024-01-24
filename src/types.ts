export type SortingOptionTitle = "Title descending" | "Title ascending";
export type SortingOptionValue = "titleDescending" | "titleAscending";

export type SortingOption = {
  title: SortingOptionTitle;
  value: SortingOptionValue;
};

export type Provider = "github";

export type Brand = Provider;
