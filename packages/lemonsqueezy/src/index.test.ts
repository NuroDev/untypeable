import { createTypeLevelClient } from "untypeable";
import { describe, it, expect, beforeAll } from "vitest";
import { join } from "node:path";

import { DataType, type LemonSqueezyRouter } from ".";

describe.concurrent("Lemon Squeezy", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  const client = createTypeLevelClient<LemonSqueezyRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(
        join("v1", pathWithParams),
        "https://api.lemonsqueezy.com"
      );

      const response = await fetch(url.href, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found.";
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  it("/users/me", async () => {
    const user = await client("/users/me");

    expect(user).toBeDefined();
    expect(user.data).toBeDefined();
    expect(user.data.type).toBe(DataType.users);
    expect(user.errors).toBeUndefined();
  });
});
