import { useState } from "preact/hooks";

/**
 * Fetch methods
 */
export type FetchMethods = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Fetch options
 * @param method fetch method
 * @param headers fetch headers
 * @param body fetch body
 * @example { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key: "value" }) }
 * @example { method: "GET", headers: { "Content-Type": "application/json" }, body: "" }
 */
export type FetchOptions = {
  method: FetchMethods;
  headers: Record<string, string>;
  body: string;
};

/**
 * Hook for fetching data from a URL
 * @param url url to fetch data from
 * @param options fetch options: method, headers, body
 * @returns {data, loading, error, refetch} data is the fetched data, loading is a boolean indicating if the fetch is in progress, error is the error if the fetch failed, refetch is a function to refetch the data
 * @example const { data, loading, error, refetch } = useFetch<DataType>("https://api.example.com/data");
 * @example const { data, loading, error } = useFetch<DataType>("https://api.example.com/data", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key: "value" }) });
 */
export function useFetch<Type>(
  url: string,
  options?: FetchOptions
): {
  data: Type | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
} {
  const [data, setData] = useState<Type | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((data) => setData(data))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));

  const refetch = () => {
    setLoading(true);
    fetch(url, options)
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

  return { data, loading, error, refetch };
}
