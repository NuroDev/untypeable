import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { SpaceXRouter } from "../src";

export function useTestClient() {
  const apiKey = process.env.SPACEX_API_KEY;

  const client = createTypeLevelClient<SpaceXRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(pathWithParams, "https://api.spacexdata.com");

      const response = await fetch(url.href, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!apiKey) throw "No SPACEX_API_KEY environment variable found.";
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
