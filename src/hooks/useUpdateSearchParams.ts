import {useCallback} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

/** To use in `Client Components`
 * - Mark your Component with 'use client' at the top of your file
 * - This hook can be used for updating all kind of Search Params
 * - Why use Search Params: https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#why-use-url-search-params
 * - You lift the state up to the URL, make it shareable, and easily handle Server State in the URL
 * - Examples: Filter on PLPs, ProductTabs, ProductQuantity, ProductImageGallery, ...
 * */
export const useUpdateSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string, append?: boolean, withCleanup?: boolean) => {
      const params = new URLSearchParams(searchParams);

      /** For some Search Params, you want to clean up all currently present other Search Params first */
      if (withCleanup) {
        for (const [key] of searchParams.entries()) {
          params.delete(key);
        }
      }

      /** Delete when filter should be applied, that is already applied (toggle filter) */
      if (params.has(name, value)) {
        params.delete(name, value);
        return params.toString();
      }

      /** You can add multiple Search Params of the same Type with `append: true`. F.e. with Multi-Filters */
      if (append) {
        // console.log("entries", searchParams.entries());
        params.append(name, value);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const updatedSearchParamsUrl = useCallback(
    ({
      withName,
      withValue,
      withCleanup,
    }: {
      withName: string;
      withValue: string;
      withCleanup?: boolean;
    }) => {
      return (
        pathname + "?" + createQueryString(withName, withValue, withCleanup)
      );
    },
    [pathname, createQueryString],
  );

  const updateSearchParams = ({
    withName,
    withValue,
    append,
    withCleanup,
    scroll = false,
  }: {
    withName: string;
    withValue: string;
    append?: boolean;
    withCleanup?: boolean;
    scroll?: boolean;
  }) => {
    router.push(
      pathname +
        "?" +
        createQueryString(withName, withValue, append, withCleanup),
      { scroll: scroll },
    );
  };

  return {
    router: router,
    pathname: pathname,
    searchParams: searchParams,
    updateSearchParams: updateSearchParams,
    updatedSearchParamsUrl: updatedSearchParamsUrl,
  };
};
