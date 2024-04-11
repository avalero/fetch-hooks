/**
 * Fetch methods
 * @param GET fetch method
 * @param POST fetch method
 * @param PUT fetch method
 * @param DELETE fetch method
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
