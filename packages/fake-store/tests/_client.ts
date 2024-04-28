import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { FakeStoreRouter } from "../src";

export function useTestClient() {
  const client = createTypeLevelClient<FakeStoreRouter>(
    async (method, path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(pathWithParams, "https://fakestoreapi.com/");
      Object.entries(input).forEach(([key, value]) =>
        url.searchParams.append(key, value as string)
      );

      const response = await fetch(url.href, {
        body: ["POST", "PATCH", "PUT"].includes(method)
          ? JSON.stringify(input)
          : undefined,
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    }
  );

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
