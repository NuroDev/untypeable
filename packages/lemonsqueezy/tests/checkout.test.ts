import { describe, it, expect } from "vitest";
import { email, firstName, name, zipCode } from "minifaker";

import "minifaker/locales/en";

import { CheckoutsSchema } from "../src/zod";
import { DataType } from "../src/_shared/_shared.validators";
import { useTestClient } from "../src/_shared/_shared.util";

describe.concurrent("Lemon Squeezy - Checkout", () => {
  const client = useTestClient();

  it("GET - /checkouts", async () => {
    const checkouts = await client("/checkouts", "GET");

    expect(checkouts).toBeDefined();
    expect(checkouts.data).toBeDefined();
    expect(checkouts.data.length).toBeGreaterThanOrEqual(1);
    expect(checkouts.data.at(0)).toBeDefined();
    expect(checkouts.data.at(0)?.type).toBe(DataType.enum.checkouts);
    expect(checkouts.errors).toBeUndefined();

    expect(CheckoutsSchema.safeParse(checkouts).success).toBe(true);
  });

  // it("POST - /checkouts", async () => {
  //   const [stores, variants] = await Promise.all([
  //     client("/stores", "GET"),
  //     client("/variants", "GET"),
  //   ]);

  //   const newCheckout = await client("/checkouts", "POST", {
  //     checkout_data: {
  //       billing_address: {
  //         country: "US",
  //         zip: zipCode(),
  //       },
  //       email: email(),
  //       name: name(),
  //     },
  //     custom_price: 100000,
  //     product_options: {
  //       description: "Hello World",
  //       name: firstName(),
  //       receipt_button_text: "Buy now",
  //       receipt_link_url: "https://lemonsqueezy.com",
  //       receipt_thank_you_note: "Thank you for your purchase",
  //       redirect_url: "https://lemonsqueezy.com",
  //     },
  //     store: stores.data.at(0)!.id,
  //     variant: variants.data.at(0)!.id,
  //   });

  //   expect(newCheckout).toBeDefined();
  //   expect(newCheckout.data).toBeDefined();
  //   expect(newCheckout.data.type).toBe(DataType.enum.checkouts);
  //   expect(newCheckout.errors).toBeUndefined();
  // });

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
    expect(checkout.data.type).toBe(DataType.enum.checkouts);
    expect(checkout.errors).toBeUndefined();
  });
});
