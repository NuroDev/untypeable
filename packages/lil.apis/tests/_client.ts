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

    // Note: We don't check if `response.ok` is true here because we want to
    // test the error handling of the API.

    return await response.json();
  });

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
