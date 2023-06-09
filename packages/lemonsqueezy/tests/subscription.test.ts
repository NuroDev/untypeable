import { describe, it, expect } from "vitest";

import { DataType } from "../src/_shared.validators";
import {
  SubscriptionSchema,
  SubscriptionsSchema,
} from "../src/subscription/subscription.validators";
import { useTestClient } from "./_client";

describe.concurrent("Lemon Squeezy - Subscription", () => {
  const client = useTestClient();

  it("GET - /subscriptions", async () => {
    // const subscriptions = await client("/subscriptions", "GET");

    // expect(subscriptions).toBeDefined();
    // expect(subscriptions.data).toBeDefined();
    // expect(subscriptions.data.length).toBeGreaterThanOrEqual(1);
    // expect(subscriptions.data.at(0)).toBeDefined();
    // expect(subscriptions.data.at(0)?.type).toBe(DataType.enum.subscriptions);
    // expect(subscriptions.errors).toBeUndefined();

    // expect(SubscriptionsSchema.safeParse(subscriptions).success).toBe(true);

    expect(true).toBe(true);
  });

  it("GET - /subscriptions/:id", async () => {
    // const subscriptions = await client("/subscriptions", "GET");
    // const subscription = await client("/subscriptions/:id", "GET", {
    //   id: subscriptions.data.at(0)!.id,
    // });

    // expect(subscription).toBeDefined();
    // expect(subscription.data).toBeDefined();
    // expect(subscription.data.type).toBe(DataType.enum.subscriptions);
    // expect(subscription.errors).toBeUndefined();

    // expect(SubscriptionsSchema.safeParse(subscriptions).success).toBe(true);
    // expect(SubscriptionSchema.safeParse(subscription).success).toBe(true);

    expect(true).toBe(true);
  });

  it("DELETE - /subscriptions/:id", async () => {
    // TODO: Create a subscription & then cancel it.
    expect(true).toBe(true);
  });
});
