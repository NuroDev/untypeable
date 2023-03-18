import { createTypeLevelClient } from "untypeable";
import { describe, it, expect, beforeAll } from "vitest";
import { email, firstName, name, zipCode } from "minifaker";
import { fetch } from "undici";
import { join } from "node:path";

import "minifaker/locales/en";

import { DataType } from ".";
import {
  CheckoutsSchema,
  DiscountSchema,
  DiscountsSchema,
  FileSchema,
  FilesSchema,
} from "./zod";

import type { LemonSqueezyRouter } from ".";

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

  it("GET - /checkouts", async () => {
    const checkouts = await client("/checkouts", "GET");

    expect(checkouts).toBeDefined();
    expect(checkouts.data).toBeDefined();
    expect(checkouts.data.length).toBeGreaterThanOrEqual(1);
    expect(checkouts.data.at(0)).toBeDefined();
    expect(checkouts.data.at(0)?.type).toBe(DataType.checkouts);
    expect(checkouts.errors).toBeUndefined();

    expect(CheckoutsSchema.safeParse(checkouts).success).toBe(true);
  });

  it("POST - /checkouts", async () => {
    const [stores, variants] = await Promise.all([
      client("/stores", "GET"),
      client("/variants", "GET"),
    ]);

    const newCheckout = await client("/checkouts", "POST", {
      checkout_data: {
        billing_address: {
          country: "US",
          zip: zipCode(),
        },
        email: email(),
        name: name(),
      },
      custom_price: 100000,
      product_options: {
        description: "Hello World",
        name: firstName(),
        receipt_button_text: "Buy now",
        receipt_link_url: "https://lemonsqueezy.com",
        receipt_thank_you_note: "Thank you for your purchase",
        redirect_url: "https://lemonsqueezy.com",
      },
      store: stores.data.at(0)!.id,
      variant: variants.data.at(0)!.id,
    });

    expect(newCheckout).toBeDefined();
    expect(newCheckout.data).toBeDefined();
    expect(newCheckout.data.type).toBe(DataType.checkouts);
    expect(newCheckout.errors).toBeUndefined();
  });

  it("GET - /checkouts/:id", async () => {
    const checkouts = await client("/checkouts", "GET");

    let firstCheckoutId = checkouts.data.at(0)?.id;
    if (!firstCheckoutId) {
      const [stores, variants] = await Promise.all([
        client("/stores", "GET"),
        client("/variants", "GET"),
      ]);

      const newCheckout = await client("/checkouts", "POST", {
        checkout_data: {
          billing_address: {
            country: "US",
            zip: zipCode(),
          },
          email: email(),
          name: name(),
        },
        custom_price: 100000,
        product_options: {
          description: "Hello World",
          name: firstName(),
          receipt_button_text: "Buy now",
          receipt_link_url: "https://lemonsqueezy.com",
          receipt_thank_you_note: "Thank you for your purchase",
          redirect_url: "https://lemonsqueezy.com",
        },
        store: stores.data.at(0)!.id,
        variant: variants.data.at(0)!.id,
      });

      firstCheckoutId = newCheckout.data.id;
    }

    const checkout = await client(`/checkouts/:id`, "GET", {
      id: firstCheckoutId,
    });

    expect(checkout).toBeDefined();
    expect(checkout.data).toBeDefined();
    expect(checkout.data.type).toBe(DataType.checkouts);
    expect(checkout.errors).toBeUndefined();
  });

  it("GET - /discounts", async () => {
    const discounts = await client("/discounts", "GET");

    expect(discounts).toBeDefined();
    expect(discounts.data).toBeDefined();
    expect(discounts.data.length).toBeGreaterThanOrEqual(1);
    expect(discounts.data.at(0)).toBeDefined();
    expect(discounts.data.at(0)?.type).toBe(DataType.discounts);
    expect(discounts.errors).toBeUndefined();

    expect(DiscountsSchema.safeParse(discounts).success).toBe(true);
  });

  it("GET - /discounts/:id", async () => {
    const discounts = await client("/discounts", "GET");
    const discount = await client(`/discounts/:id`, "GET", {
      id: discounts.data.at(0)!.id,
    });

    expect(discount).toBeDefined();
    expect(discount.data).toBeDefined();
    expect(discount.data.type).toBe(DataType.discounts);
    expect(discount.errors).toBeUndefined();

    expect(DiscountsSchema.safeParse(discounts).success).toBe(true);
    expect(DiscountSchema.safeParse(discount).success).toBe(true);
  });

  it("GET - /files", async () => {
    const files = await client("/files", "GET");

    expect(files).toBeDefined();
    expect(files.data).toBeDefined();
    expect(files.data.length).toBeGreaterThanOrEqual(1);
    expect(files.data.at(0)).toBeDefined();
    expect(files.data.at(0)?.type).toBe(DataType.files);
    expect(files.errors).toBeUndefined();

    expect(FilesSchema.safeParse(files).success).toBe(true);
  });

  it("GET - /files/:id", async () => {
    const files = await client("/files", "GET");
    const file = await client(`/files/:id`, "GET", {
      id: files.data.at(0)!.id,
    });

    expect(file).toBeDefined();
    expect(file.data).toBeDefined();
    expect(file.data.type).toBe(DataType.files);
    expect(file.errors).toBeUndefined();

    expect(FilesSchema.safeParse(files).success).toBe(true);
    expect(FileSchema.safeParse(file).success).toBe(true);
  });

  it("GET - /license-keys", async () => {
    const licenseKeys = await client("/license-keys", "GET");

    expect(licenseKeys).toBeDefined();
    expect(licenseKeys.data).toBeDefined();
    expect(licenseKeys.data.length).toBeGreaterThanOrEqual(1);
    expect(licenseKeys.data.at(0)).toBeDefined();
    expect(licenseKeys.data.at(0)?.type).toBe(DataType.license_keys);
    expect(licenseKeys.errors).toBeUndefined();
  });

  it("GET - /license-keys/:id", async () => {
    const licenseKeys = await client("/license-keys", "GET");
    const licenseKey = await client(`/license-keys/:id`, "GET", {
      id: licenseKeys.data.at(0)!.id,
    });

    expect(licenseKey).toBeDefined();
    expect(licenseKey.data).toBeDefined();
    expect(licenseKey.data.type).toBe(DataType.license_keys);
    expect(licenseKey.errors).toBeUndefined();
  });

  it("GET - /license-key-instances", async () => {
    const licenseKeyInstances = await client("/license-key-instances", "GET");

    expect(licenseKeyInstances).toBeDefined();
    expect(licenseKeyInstances.data).toBeDefined();
    expect(licenseKeyInstances.data.length).toBeGreaterThanOrEqual(1);
    expect(licenseKeyInstances.data.at(0)).toBeDefined();
    expect(licenseKeyInstances.data.at(0)?.type).toBe(
      DataType.license_key_instances
    );
    expect(licenseKeyInstances.errors).toBeUndefined();
  });

  it("GET - /license-key-instances/:id", async () => {
    const licenseKeyInstances = await client("/license-key-instances", "GET");
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

  it("GET - /orders", async () => {
    const orderItems = await client("/orders", "GET");

    expect(orderItems).toBeDefined();
    expect(orderItems.data).toBeDefined();
    expect(orderItems.data.length).toBeGreaterThanOrEqual(1);
    expect(orderItems.data.at(0)).toBeDefined();
    expect(orderItems.data.at(0)?.type).toBe(DataType.orders);
    expect(orderItems.errors).toBeUndefined();
  });

  it("GET - /orders/:id", async () => {
    const orderItems = await client("/orders", "GET");
    const orderItem = await client(`/orders/:id`, "GET", {
      id: orderItems.data.at(0)!.id,
    });

    expect(orderItem).toBeDefined();
    expect(orderItem.data).toBeDefined();
    expect(orderItem.data.type).toBe(DataType.orders);
    expect(orderItem.errors).toBeUndefined();
  });

  it("GET - /order-items", async () => {
    const orderItems = await client("/order-items", "GET");

    expect(orderItems).toBeDefined();
    expect(orderItems.data).toBeDefined();
    expect(orderItems.data.length).toBeGreaterThanOrEqual(1);
    expect(orderItems.data.at(0)).toBeDefined();
    expect(orderItems.data.at(0)?.type).toBe(DataType.order_items);
    expect(orderItems.errors).toBeUndefined();
  });

  it("GET - /order-items/:id", async () => {
    const orderItems = await client("/order-items", "GET");
    const orderItem = await client(`/order-items/:id`, "GET", {
      id: orderItems.data.at(0)!.id,
    });

    expect(orderItem).toBeDefined();
    expect(orderItem.data).toBeDefined();
    expect(orderItem.data.type).toBe(DataType.order_items);
    expect(orderItem.errors).toBeUndefined();
  });

  it("GET - /products", async () => {
    const products = await client("/products", "GET");

    expect(products).toBeDefined();
    expect(products.data).toBeDefined();
    expect(products.data.length).toBeGreaterThanOrEqual(1);
    expect(products.data.at(0)).toBeDefined();
    expect(products.data.at(0)?.type).toBe(DataType.products);
    expect(products.errors).toBeUndefined();
  });

  it("GET - /products/:id", async () => {
    const products = await client("/products", "GET");
    const product = await client(`/products/:id`, "GET", {
      id: products.data.at(0)!.id,
    });

    expect(product).toBeDefined();
    expect(product.data).toBeDefined();
    expect(product.data.type).toBe(DataType.products);
    expect(product.errors).toBeUndefined();
  });

  it("GET - /stores", async () => {
    const stores = await client("/stores", "GET");

    expect(stores).toBeDefined();
    expect(stores.data).toBeDefined();
    expect(stores.data.length).toBeGreaterThanOrEqual(1);
    expect(stores.data.at(0)).toBeDefined();
    expect(stores.data.at(0)?.type).toBe(DataType.stores);
    expect(stores.errors).toBeUndefined();
  });

  it("GET - /stores/:id", async () => {
    const stores = await client("/stores", "GET");
    const store = await client(`/stores/:id`, "GET", {
      id: stores.data.at(0)!.id,
    });

    expect(store).toBeDefined();
    expect(store.data).toBeDefined();
    expect(store.data.type).toBe(DataType.stores);
    expect(store.errors).toBeUndefined();
  });

  it("GET - /subscriptions", async () => {
    const subscriptions = await client("/subscriptions", "GET");

    expect(subscriptions).toBeDefined();
    expect(subscriptions.data).toBeDefined();
    expect(subscriptions.data.length).toBeGreaterThanOrEqual(1);
    expect(subscriptions.data.at(0)).toBeDefined();
    expect(subscriptions.data.at(0)?.type).toBe(DataType.subscriptions);
    expect(subscriptions.errors).toBeUndefined();
  });

  it("GET - /subscriptions/:id", async () => {
    const subscriptions = await client("/subscriptions", "GET");
    const subscription = await client("/subscriptions/:id", "GET", {
      id: subscriptions.data.at(0)!.id,
    });

    expect(subscription).toBeDefined();
    expect(subscription.data).toBeDefined();
    expect(subscription.data.type).toBe(DataType.subscriptions);
    expect(subscription.errors).toBeUndefined();
  });

  it("DELETE - /subscriptions/:id", async () => {
    // TODO: Create a subscription & then cancel it.
    expect(true).toBe(true);
  });

  it("GET - /subscription-invoices", async () => {
    const subscriptionInvoices = await client("/subscription-invoices", "GET");

    expect(subscriptionInvoices).toBeDefined();
    expect(subscriptionInvoices.data).toBeDefined();
    expect(subscriptionInvoices.data.length).toBeGreaterThanOrEqual(1);
    expect(subscriptionInvoices.data.at(0)).toBeDefined();
    expect(subscriptionInvoices.data.at(0)?.type).toBe(
      DataType.subscription_invoices
    );
    expect(subscriptionInvoices.errors).toBeUndefined();
  });

  it("GET - /subscription-invoices/:id", async () => {
    const subscriptionInvoices = await client("/subscription-invoices", "GET");
    const subscriptionInvoice = await client(
      "/subscription-invoices/:id",
      "GET",
      {
        id: subscriptionInvoices.data.at(0)!.id,
      }
    );

    expect(subscriptionInvoice).toBeDefined();
    expect(subscriptionInvoice.data).toBeDefined();
    expect(subscriptionInvoice.data.type).toBe(DataType.subscription_invoices);
    expect(subscriptionInvoice.errors).toBeUndefined();
  });

  it("GET - /users/me", async () => {
    const user = await client("/users/me", "GET");

    expect(user).toBeDefined();
    expect(user.data).toBeDefined();
    expect(user.data.type).toBe(DataType.users);
    expect(user.errors).toBeUndefined();
  });

  it("GET - /variants", async () => {
    const variants = await client("/variants", "GET");

    expect(variants).toBeDefined();
    expect(variants.data).toBeDefined();
    expect(variants.data.length).toBeGreaterThanOrEqual(1);
    expect(variants.data.at(0)).toBeDefined();
    expect(variants.data.at(0)?.type).toBe(DataType.variants);
    expect(variants.errors).toBeUndefined();
  });

  it("GET - /variants/:id", async () => {
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
