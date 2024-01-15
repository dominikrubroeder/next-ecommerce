import {useRouter} from "next/navigation";
import {useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {formatSearchTerm} from "@/lib/helpers";

/**
 * `useSearch()` custom hook for handling the Search logic in Client Components.
 * It will format and redirect the user to /search/[searchTerm] page with the corresponding search term he entered in `Search.tsx`.
 * The related page is to find in `./src/app/search/[searchTerm]/page.tsx` where the actual Algolia Search query is made on the Server Side.
 *
 * - Usage: `const { state, handleSearch } = useSearch()`
 * - Example: `Search.tsx` in ./src/components/Search.tsx
 * */
export const useSearch = () => {
  const router = useRouter();
  const [state, setState] = useState<{ error: boolean; errorMessage: string }>({
    error: false,
    errorMessage: "",
  });

  /** useDebouncedCallback waits (300) milliseconds to fire this function after user stops typing. */
  const handleSearch = useDebouncedCallback((term: string) => {
    const formattedSearchTerm = formatSearchTerm(term, "url");
    if (term.trim() !== "") router.push(`/search/${formattedSearchTerm}`);

    if (term.trim() === "")
      setState((prevState) => {
        return {
          ...prevState,
          error: true,
          errorMessage: "Search for anything...",
        };
      });
  }, 300);

  return {
    state,
    handleSearch,
  };
};
