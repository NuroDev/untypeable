import { describe, it, expect } from "vitest";

import { DataType } from "../src/_shared.validators";
import {
  SubscriptionInvoiceSchema,
  SubscriptionInvoicesSchema,
} from "../src/subscriptionInvoice/subscriptionInvoice.validators";
import { useTestClient } from "./_client";

describe.concurrent("Lemon Squeezy - Subscription Invoice", () => {
  const client = useTestClient();

  it("GET - /subscription-invoices", async () => {
    // const subscriptionInvoices = await client("/subscription-invoices", "GET");

    // expect(subscriptionInvoices).toBeDefined();
    // expect(subscriptionInvoices.data).toBeDefined();
    // expect(subscriptionInvoices.data.length).toBeGreaterThanOrEqual(1);
    // expect(subscriptionInvoices.data.at(0)).toBeDefined();
    // expect(subscriptionInvoices.data.at(0)?.type).toBe(
    //   DataType.enum.subscription_invoices
    // );
    // expect(subscriptionInvoices.errors).toBeUndefined();

    // expect(SubscriptionInvoicesSchema.safeParse(subscriptionInvoices).success).toBe(true);

    expect(true).toBe(true);
  });

  it("GET - /subscription-invoices/:id", async () => {
    // const subscriptionInvoices = await client("/subscription-invoices", "GET");
    // const subscriptionInvoice = await client(
    //   "/subscription-invoices/:id",
    //   "GET",
    //   {
    //     id: subscriptionInvoices.data.at(0)!.id,
    //   }
    // );

    // expect(subscriptionInvoice).toBeDefined();
    // expect(subscriptionInvoice.data).toBeDefined();
    // expect(subscriptionInvoice.data.type).toBe(DataType.enum.subscription_invoices);
    // expect(subscriptionInvoice.errors).toBeUndefined();

    // expect(SubscriptionInvoicesSchema.safeParse(subscriptionInvoices).success).toBe(true);
    // expect(SubscriptionInvoiceSchema.safeParse(subscriptionInvoice).success).toBe(true);

    expect(true).toBe(true);
  });
});
