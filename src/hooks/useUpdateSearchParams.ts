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

  const createQueryStringURL = useCallback(
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
  }: {
    withName: string;
    withValue: string;
    withCleanup?: boolean;
  }) => {
    router.push(
      pathname + "?" + createQueryString(withName, withValue, withCleanup),
    );
  };

  return {
    router: router,
    pathname: pathname,
    searchParams: searchParams,
    createQueryString: createQueryString,
    updatedSearchParamURL: createQueryStringURL,
    updateSearchParams: updateSearchParams,
  };
};
