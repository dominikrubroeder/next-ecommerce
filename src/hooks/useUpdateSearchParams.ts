import {useCallback} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

/** To use in `Client Components` */
export const useUpdateSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string, withCleanup?: boolean) => {
      const params = new URLSearchParams(searchParams);

      if (withCleanup) {
        for (const [key] of searchParams.entries()) {
          params.delete(key);
        }
      }

      params.set(name, value);

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
    withCleanup,
    scroll = false,
  }: {
    withName: string;
    withValue: string;
    withCleanup?: boolean;
    scroll?: boolean;
  }) => {
    router.push(
      pathname + "?" + createQueryString(withName, withValue, withCleanup),
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
