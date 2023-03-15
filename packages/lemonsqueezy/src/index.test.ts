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

  it("/order-items", async () => {
    // TODO: Find a way to not require an empty object.
    const orderItems = await client("/order-items", {});

    expect(orderItems).toBeDefined();
    expect(orderItems.data).toBeDefined();
    expect(orderItems.data.length).toBeGreaterThanOrEqual(1);
    expect(orderItems.data.at(0)).toBeDefined();
    expect(orderItems.data.at(0)?.type).toBe(DataType.order_items);
    expect(orderItems.errors).toBeUndefined();
  });

  it("/order-items/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const orderItems = await client("/order-items", {});
    const orderItem = await client(`/order-items/:id`, {
      id: orderItems.data.at(0)!.id,
    });

    expect(orderItem).toBeDefined();
    expect(orderItem.data).toBeDefined();
    expect(orderItem.data.type).toBe(DataType.order_items);
    expect(orderItem.errors).toBeUndefined();
  });

  it("/products", async () => {
    // TODO: Find a way to not require an empty object.
    const products = await client("/products", {});

    expect(products).toBeDefined();
    expect(products.data).toBeDefined();
    expect(products.data.length).toBeGreaterThanOrEqual(1);
    expect(products.data.at(0)).toBeDefined();
    expect(products.data.at(0)?.type).toBe(DataType.products);
    expect(products.errors).toBeUndefined();
  });

  it("/products/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const products = await client("/products", {});
    const product = await client(`/products/:id`, {
      id: products.data.at(0)!.id,
    });

    expect(product).toBeDefined();
    expect(product.data).toBeDefined();
    expect(product.data.type).toBe(DataType.products);
    expect(product.errors).toBeUndefined();
  });

  it("/stores", async () => {
    const stores = await client("/stores");

    expect(stores).toBeDefined();
    expect(stores.data).toBeDefined();
    expect(stores.data.length).toBeGreaterThanOrEqual(1);
    expect(stores.data.at(0)).toBeDefined();
    expect(stores.data.at(0)?.type).toBe(DataType.stores);
    expect(stores.errors).toBeUndefined();
  });

  it("/stores/:id", async () => {
    const stores = await client("/stores");
    const store = await client(`/stores/:id`, {
      id: stores.data.at(0)!.id,
    });

    expect(store).toBeDefined();
    expect(store.data).toBeDefined();
    expect(store.data.type).toBe(DataType.stores);
    expect(store.errors).toBeUndefined();
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
