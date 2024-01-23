import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export const useProductQuantity = () => {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  const defaultQuantity = 1;
  const minQuantity = 1;
  const maxQuantity = 10;

  // If user types in manual quantity in URL, provide a max a min value as fallback
  const quantity =
    searchParams && searchParams.get("quantity")
      ? Number(searchParams.get("quantity")) > maxQuantity
        ? maxQuantity
        : Number(searchParams.get("quantity")) <= minQuantity
          ? minQuantity
          : Number(searchParams.get("quantity"))
      : defaultQuantity;

  const minValue = (
    quantity - 1 < minQuantity ? minQuantity : quantity - 1
  ).toString();

  const maxValue = (
    quantity + 1 > maxQuantity ? maxQuantity : quantity + 1
  ).toString();

  return {
    quantity,
    minValue,
    maxValue,
    minQuantity,
    maxQuantity,
    increase: () =>
      updateSearchParams({
        withName: "quantity",
        withValue: maxValue,
        withCleanup: false,
      }),
    decrease: () =>
      updateSearchParams({
        withName: "quantity",
        withValue: minValue,
        withCleanup: false,
      }),
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      updateSearchParams({
        withName: "quantity",
        withValue: e.target.value,
        withCleanup: false,
      }),
  };
};
