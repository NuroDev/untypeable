import { createTypeLevelClient } from "untypeable";
import { describe, it, expect, beforeAll } from "vitest";
import { join } from "node:path";

import { DataType, type LemonSqueezyRouter } from ".";

describe.concurrent("Lemon Squeezy", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

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

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found.";
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  it("/discounts", async () => {
    // TODO: Find a way to not require an empty object.
    const discounts = await client("/discounts", "GET", {});

    expect(discounts).toBeDefined();
    expect(discounts.data).toBeDefined();
    expect(discounts.data.length).toBeGreaterThanOrEqual(1);
    expect(discounts.data.at(0)).toBeDefined();
    expect(discounts.data.at(0)?.type).toBe(DataType.discounts);
    expect(discounts.errors).toBeUndefined();
  });

  it("/discounts/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const discounts = await client("/discounts", "GET", {});
    const discount = await client(`/discounts/:id`, "GET", {
      id: discounts.data.at(0)!.id,
    });

    expect(discount).toBeDefined();
    expect(discount.data).toBeDefined();
    expect(discount.data.type).toBe(DataType.discounts);
    expect(discount.errors).toBeUndefined();
  });

  it("/files", async () => {
    // TODO: Find a way to not require an empty object.
    const files = await client("/files", "GET", {});

    expect(files).toBeDefined();
    expect(files.data).toBeDefined();
    expect(files.data.length).toBeGreaterThanOrEqual(1);
    expect(files.data.at(0)).toBeDefined();
    expect(files.data.at(0)?.type).toBe(DataType.files);
    expect(files.errors).toBeUndefined();
  });

  it("/files/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const files = await client("/files", "GET", {});
    const file = await client(`/files/:id`, "GET", {
      id: files.data.at(0)!.id,
    });

    expect(file).toBeDefined();
    expect(file.data).toBeDefined();
    expect(file.data.type).toBe(DataType.files);
    expect(file.errors).toBeUndefined();
  });

  it("/license-keys", async () => {
    // TODO: Find a way to not require an empty object.
    const licenseKeys = await client("/license-keys", "GET", {});

    expect(licenseKeys).toBeDefined();
    expect(licenseKeys.data).toBeDefined();
    expect(licenseKeys.data.length).toBeGreaterThanOrEqual(1);
    expect(licenseKeys.data.at(0)).toBeDefined();
    expect(licenseKeys.data.at(0)?.type).toBe(DataType.license_keys);
    expect(licenseKeys.errors).toBeUndefined();
  });

  it("/license-keys/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const licenseKeys = await client("/license-keys", "GET", {});
    const licenseKey = await client(`/license-keys/:id`, "GET", {
      id: licenseKeys.data.at(0)!.id,
    });

    expect(licenseKey).toBeDefined();
    expect(licenseKey.data).toBeDefined();
    expect(licenseKey.data.type).toBe(DataType.license_keys);
    expect(licenseKey.errors).toBeUndefined();
  });

  it("/license-key-instances", async () => {
    // TODO: Find a way to not require an empty object.
    const licenseKeyInstances = await client(
      "/license-key-instances",
      "GET",
      {}
    );

    expect(licenseKeyInstances).toBeDefined();
    expect(licenseKeyInstances.data).toBeDefined();
    expect(licenseKeyInstances.data.length).toBeGreaterThanOrEqual(1);
    expect(licenseKeyInstances.data.at(0)).toBeDefined();
    expect(licenseKeyInstances.data.at(0)?.type).toBe(
      DataType.license_key_instances
    );
    expect(licenseKeyInstances.errors).toBeUndefined();
  });

  it("/license-key-instances/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const licenseKeyInstances = await client(
      "/license-key-instances",
      "GET",
      {}
    );
    const licenseKeyInstance = await client(
      `/license-key-instances/:id`,
      "GET",
      {
        id: licenseKeyInstances.data.at(0)!.id,
      }
    );

    expect(licenseKeyInstance).toBeDefined();
    expect(licenseKeyInstance.data).toBeDefined();
    expect(licenseKeyInstance.data.type).toBe(DataType.license_key_instances);
    expect(licenseKeyInstance.errors).toBeUndefined();
  });

  it("/orders", async () => {
    // TODO: Find a way to not require an empty object.
    const orderItems = await client("/orders", "GET", {});

    expect(orderItems).toBeDefined();
    expect(orderItems.data).toBeDefined();
    expect(orderItems.data.length).toBeGreaterThanOrEqual(1);
    expect(orderItems.data.at(0)).toBeDefined();
    expect(orderItems.data.at(0)?.type).toBe(DataType.orders);
    expect(orderItems.errors).toBeUndefined();
  });

  it("/orders/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const orderItems = await client("/orders", "GET", {});
    const orderItem = await client(`/orders/:id`, "GET", {
      id: orderItems.data.at(0)!.id,
    });

    expect(orderItem).toBeDefined();
    expect(orderItem.data).toBeDefined();
    expect(orderItem.data.type).toBe(DataType.orders);
    expect(orderItem.errors).toBeUndefined();
  });

  it("/order-items", async () => {
    // TODO: Find a way to not require an empty object.
    const orderItems = await client("/order-items", "GET", {});

    expect(orderItems).toBeDefined();
    expect(orderItems.data).toBeDefined();
    expect(orderItems.data.length).toBeGreaterThanOrEqual(1);
    expect(orderItems.data.at(0)).toBeDefined();
    expect(orderItems.data.at(0)?.type).toBe(DataType.order_items);
    expect(orderItems.errors).toBeUndefined();
  });

  it("/order-items/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const orderItems = await client("/order-items", "GET", {});
    const orderItem = await client(`/order-items/:id`, "GET", {
      id: orderItems.data.at(0)!.id,
    });

    expect(orderItem).toBeDefined();
    expect(orderItem.data).toBeDefined();
    expect(orderItem.data.type).toBe(DataType.order_items);
    expect(orderItem.errors).toBeUndefined();
  });

  it("/products", async () => {
    // TODO: Find a way to not require an empty object.
    const products = await client("/products", "GET", {});

    expect(products).toBeDefined();
    expect(products.data).toBeDefined();
    expect(products.data.length).toBeGreaterThanOrEqual(1);
    expect(products.data.at(0)).toBeDefined();
    expect(products.data.at(0)?.type).toBe(DataType.products);
    expect(products.errors).toBeUndefined();
  });

  it("/products/:id", async () => {
    // TODO: Find a way to not require an empty object.
    const products = await client("/products", "GET", {});
    const product = await client(`/products/:id`, "GET", {
      id: products.data.at(0)!.id,
    });

    expect(product).toBeDefined();
    expect(product.data).toBeDefined();
    expect(product.data.type).toBe(DataType.products);
    expect(product.errors).toBeUndefined();
  });

  it("/stores", async () => {
    const stores = await client("/stores", "GET");

    expect(stores).toBeDefined();
    expect(stores.data).toBeDefined();
    expect(stores.data.length).toBeGreaterThanOrEqual(1);
    expect(stores.data.at(0)).toBeDefined();
    expect(stores.data.at(0)?.type).toBe(DataType.stores);
    expect(stores.errors).toBeUndefined();
  });

  it("/stores/:id", async () => {
    const stores = await client("/stores", "GET");
    const store = await client(`/stores/:id`, "GET", {
      id: stores.data.at(0)!.id,
    });

    expect(store).toBeDefined();
    expect(store.data).toBeDefined();
    expect(store.data.type).toBe(DataType.stores);
    expect(store.errors).toBeUndefined();
  });

  it("/users/me", async () => {
    const user = await client("/users/me", "GET");

    expect(user).toBeDefined();
    expect(user.data).toBeDefined();
    expect(user.data.type).toBe(DataType.users);
    expect(user.errors).toBeUndefined();
  });

  it("/variants", async () => {
    const variants = await client("/variants", "GET");

    expect(variants).toBeDefined();
    expect(variants.data).toBeDefined();
    expect(variants.data.length).toBeGreaterThanOrEqual(1);
    expect(variants.data.at(0)).toBeDefined();
    expect(variants.data.at(0)?.type).toBe(DataType.variants);
    expect(variants.errors).toBeUndefined();
  });

  it("/variants/:id", async () => {
    const variants = await client("/variants", "GET");
    const variant = await client(`/variants/:id`, "GET", {
      id: variants.data.at(0)?.id,
    });

    expect(variant).toBeDefined();
    expect(variant.data).toBeDefined();
    expect(variant.data.type).toBe(DataType.variants);
    expect(variant.errors).toBeUndefined();
  });
});
