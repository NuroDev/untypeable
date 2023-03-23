import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { SpaceXRouter } from "../src";
import { join } from "path";

export function useTestClient() {
  const client = createTypeLevelClient<SpaceXRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(
        join(input.version || "v4", pathWithParams),
        "https://api.spacexdata.com"
      );

      const response = await fetch(url.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok)
        throw new Error(`[${response.status}]${response.statusText}`);

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
