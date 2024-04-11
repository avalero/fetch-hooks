/**
 * Collection of preact hooks for fetching data.
 * @module
 */

/**
 * Hook for fetching data from a URL
 */
export { useFetch } from "./useFetch.ts";
/**
 * Hook for manually fetching data from a URL
 */
export { useLazyFetch } from "./useLazyFetch.ts";

/**
 * Fetch methods and options types
 */
export { type FetchMethods, type FetchOptions } from "./types.ts";
