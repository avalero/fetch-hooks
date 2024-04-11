import { useState } from "preact/hooks";
import type { FetchOptions } from "./types.ts";

/**
 * Hook for fetching data from a URL
 * @param url url to fetch data from
 * @param options fetch options: method, headers, body
 * @returns {data, loading, error, lazyFetch} data is the fetched data, loading is a boolean indicating if the fetch is in progress, error is the error if the fetch failed, lazyFetch is a function to fetch the data
 * @example const { data, loading, error, lazyFetch } = useLazyFetch<DataType>(); lazyFetch("https://api.example.com/newdata");
 * @example const { data, loading, error } = useLazyFetch<DataType>("https://api.example.com/data", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key: "value" }) }); lazyFetch();
 */
export function useLazyFetch<Type>(
  url?: string,
  options?: FetchOptions
): {
  data: Type | null;
  loading: boolean;
  error: Error | null;
  lazyFetch: (newURL?: string, newOptions?: FetchOptions) => void;
} {
  const [data, setData] = useState<Type | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const lazyFetch = (newURL?: string, newOptions?: FetchOptions) => {
    setLoading(true);
    setError(null);
    if (!newURL && !url) {
      setError(new Error("No URL provided"));
      setLoading(false);
      return;
    }

    fetch((newURL || url)!, newOptions || options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, lazyFetch };
}
