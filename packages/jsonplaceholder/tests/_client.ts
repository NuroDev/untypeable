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
