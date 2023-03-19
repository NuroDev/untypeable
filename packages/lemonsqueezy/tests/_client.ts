import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";
import { join } from "node:path";

import type { LemonSqueezyRouter } from "..";

export function useTestClient() {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY;

  const client = createTypeLevelClient<LemonSqueezyRouter>(
    async (path, method, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(
        join("v1", pathWithParams),
        "https://api.lemonsqueezy.com"
      );

      const hasBody = ["DELETE", "POST", "PUT"].includes(method);

      const response = await fetch(url.href, {
        body: hasBody ? JSON.stringify(input) : undefined,
        method,
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (!response.ok)
        throw new Error(response.statusText, {
          cause: response.status,
        });

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found.";
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
