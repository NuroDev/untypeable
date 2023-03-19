import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";
import { join } from "node:path";

import type { LogSnagRouter } from "../src";

export function useTestClient() {
  const apiKey = process.env.LOGSNAG_API_KEY;

  const client = createTypeLevelClient<LogSnagRouter>(
    async (path, input = {}) => {
      const { apiVersion = "v1", ...options } = input;

      const url = new URL(join(apiVersion, path), "https://api.logsnag.com");

      const response = await fetch(url.href, {
        body: JSON.stringify(options),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!apiKey) throw "No LOGSNAG_API_KEY environment variable found.";
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
