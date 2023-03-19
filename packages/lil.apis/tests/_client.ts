import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { LilRouter } from "../src";

export function useTestClient() {
  const client = createTypeLevelClient<LilRouter>(async (path, input = {}) => {
    const url = new URL(path, "https://api.lil.software/");
    Object.entries(input).forEach(([key, value]) =>
      url.searchParams.append(key, value as string)
    );

    const response = await fetch(url.href);
    if (!response.ok)
      throw new Error(response.statusText, {
        cause: response.status,
      });

    return await response.json();
  });

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
