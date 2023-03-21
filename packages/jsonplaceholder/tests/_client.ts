import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { JSONPlaceholderRouter } from "../src";

export function useTestClient() {
  const client = createTypeLevelClient<JSONPlaceholderRouter>(
    async (path, method, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(
        pathWithParams,
        "https://jsonplaceholder.typicode.com"
      );

      // Add filter parameters to the URL if it's a
      // `GET` method and an input is provided
      if (method === "GET" && input) {
        // Get all path parameters from the path, EG: `/:id` => `id`
        const pathParams = [...path.matchAll(/\/:(\w+)/g)].map(
          ([, param]) => param
        );
        // Remove all path parameters from the input
        const strippedInput = Object.fromEntries(
          Object.entries(input).filter((e) => !pathParams.includes(e[0]))
        );
        // Append all remaining input to the URL
        Object.entries(strippedInput).forEach(([key, value]) =>
          url.searchParams.append(key, value as string)
        );
      }

      const response = await fetch(url.href, {
        body: method === "GET" ? undefined : JSON.stringify(input),
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok)
        throw new Error(response.statusText, {
          cause: response.status,
        });

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
