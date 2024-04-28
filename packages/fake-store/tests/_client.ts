import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { FakeStoreRouter } from "../src";

export function useTestClient() {
  const client = createTypeLevelClient<FakeStoreRouter>(
    async (method, path, input = {}) => {
      const url = new URL(path, "https://fakestoreapi.com/");

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
