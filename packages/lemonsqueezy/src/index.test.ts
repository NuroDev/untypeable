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

  it("/variants", async () => {
    const variants = await client("/variants");

    expect(variants).toBeDefined();
    expect(variants.data).toBeDefined();
    expect(variants.data.length).toBeGreaterThanOrEqual(1);
    expect(variants.data.at(0)).toBeDefined();
    expect(variants.data.at(0)?.type).toBe(DataType.variants);
    expect(variants.errors).toBeUndefined();
  });

  it("/variants/:id", async () => {
    const variants = await client("/variants");
    const variant = await client(`/variants/:id`, {
      id: variants.data.at(0)?.id,
    });

    expect(variant).toBeDefined();
    expect(variant.data).toBeDefined();
    expect(variant.data.type).toBe(DataType.variants);
    expect(variant.errors).toBeUndefined();
  });
});
