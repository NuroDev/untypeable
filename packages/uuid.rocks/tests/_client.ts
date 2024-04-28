import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { UUIDRocksRouter } from "../src";

interface UseTestClientOptions {
  json: boolean;
}

export function useTestClient(options: UseTestClientOptions = { json: true }) {
  const client = createTypeLevelClient<UUIDRocksRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(pathWithParams, "https://uuid.rocks/");
      Object.entries(input).forEach(([key, value]) =>
        url.searchParams.append(key, value as string)
      );

      const response = await fetch(url.href);

      // Note: We don't check if `response.ok` is true here because we want to
      // test the error handling of the API.

      if (options.json) return response.json();

      return response.text();
    }
  );

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
