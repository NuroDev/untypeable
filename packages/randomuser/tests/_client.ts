import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { RandomUserRouter } from "../src";

export function useTestClient() {
  const client = createTypeLevelClient<RandomUserRouter>(
    async (path, input = {}) => {
      const url = new URL(path, "https://randomuser.me/");
      Object.entries(input).forEach(([key, value]) =>
        url.searchParams.append(key, value as string)
      );

      const response = await fetch(url.href);
      if (!response.ok)
        throw new Error(`HTTP ${response.status} ${response.statusText}`);

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
