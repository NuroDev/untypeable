import { z } from "zod";

import {
  DataType,
  defineLemonSqueezySchema,
} from "../_shared/_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export const SubscriptionInvoiceSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      billing_reason: z.string(),
      card_brand: z.string(),
      card_last_four: z.string(),
      created_at: z.string().datetime(),
      currency_rate: z.string(),
      currency: z.string(),
      discount_total_formatted: z.string(),
      discount_total_usd: z.number(),
      discount_total: z.number(),
      refunded_at: z.string().datetime().nullable(),
      refunded: z.number(),
      status_formatted: z.string(),
      status: z.string(),
      store_id: z.number(),
      subscription_id: z.number(),
      subtotal_formatted: z.string(),
      subtotal_usd: z.number(),
      subtotal: z.number(),
      tax_formatted: z.string(),
      tax_usd: z.number(),
      tax: z.number(),
      test_mode: z.boolean(),
      total_formatted: z.string(),
      total_usd: z.number(),
      total: z.number(),
      updated_at: z.string().datetime(),
      urls: z.object({
        invoice_url: z.string().url(),
      }),
    }),
    type: z.literal(DataType.enum["subscription-invoices"]),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export const SubscriptionInvoicesSchema = defineLemonSqueezySchema(
  z.array(SubscriptionInvoiceSchema.shape.data)
);

export const SubscriptionInvoicesParamsSchema = z.object({
  /**
   * Only return subscription invoices that are `refunded` (the value should be `true` or `false`).
   */
  refunded: z.boolean().optional(),
  /**
   * Only return subscription invoices with this status
   */
  status: z.string().optional(),
  /**
   * Only return subscription invoices belonging to the store with this ID
   */
  store_id: z.string().optional(),
});

export const SubscriptionInvoiceParamsSchema = z.object({
  id: z.string(),
});
