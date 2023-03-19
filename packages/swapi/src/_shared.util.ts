import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";
import { join } from "node:path";

import type { SwapiRouter } from ".";

export function useTestClient() {
  const client = createTypeLevelClient<SwapiRouter>(
    async (path, input = {}) => {
      const url = new URL(join("/api", path), "https://swapi.dev/");
      Object.entries(input).forEach(([key, value]) =>
        url.searchParams.append(key, value as string)
      );

      const response = await fetch(url.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
