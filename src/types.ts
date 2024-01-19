export type SortingOptionTitle = "Title descending" | "Title ascending";
export type SortingOptionValue = "titleDescending" | "titleAscending";

export type SortingOption = {
  title: SortingOptionTitle;
  value: SortingOptionValue;
};

export type Provider = "GitHub";

export type Brand = Provider;
