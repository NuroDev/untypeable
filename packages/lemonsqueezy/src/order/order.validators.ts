import { z } from "zod";

import {
  DataType,
  defineLemonSqueezySchema,
} from "../_shared/_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/orders#the-order-object
 */
export const OrderSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * If the order currency is USD, this will always be `1.0`.
       *
       * Otherwise, this is the currency conversion rate used to determine the cost of the order in USD at the time of purchase
       */
      currency_rate: z.string(),
      /**
       * The ISO 4217 currency code for the order (e.g. `USD`, `GBP`, etc)
       *
       * @see https://en.wikipedia.org/wiki/ISO_4217
       */
      currency: z.string(),
      /**
       * A positive integer in cents representing the total discount value applied to the order in USD
       */
      discount_total_usd: z.number(),
      /**
       * A positive integer in cents representing the total discount value applied to the order in the order currency
       */
      discount_total: z.number(),
      /**
       * The unique identifier (UUID) for this order
       */
      identifier: z.string(),
      /**
       * An integer representing the sequential order number for this store
       */
      order_number: z.number(),
      /**
       * If the order has been refunded, this will be an ISO-8601 formatted date-time string indicating when the order was refunded
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      refunded_at: z.string().datetime().nullable(),
      /**
       * Has the value true if the order has been refunded
       */
      refunded: z.number(),
      /**
       * The formatted status of the order
       */
      status_formatted: z.string(),
      /**
       * The status of the order. One of `pending`, `failed`, `paid`, `refunded`
       */
      status: z.enum(["pending", "failed", "paid", "refunded"]),
      /**
       * The ID of the store this order belongs to
       */
      store_id: z.number(),
      /**
       * A positive integer in cents representing the subtotal of the order in USD
       */
      subtotal_usd: z.number(),
      /**
       * A positive integer in cents representing the subtotal of the order in the order currency
       */
      subtotal: z.number(),
      /**
       * If tax is applied to the order, this will be the name of the tax rate (e.g. `VAT`, `Sales Tax`, etc)
       */
      tax_name: z.string(),
      /**
       * If tax is applied to the order, this will be the rate of tax as a decimal percentage
       */
      tax_rate: z.string(),
      /**
       * A positive integer in cents representing the tax applied to the order in USD
       */
      tax_usd: z.number(),
      /**
       * A positive integer in cents representing the tax applied to the order in the order currency
       */
      tax: z.number(),
      /**
       * A positive integer in cents representing the total cost of the order in USD
       */
      total_usd: z.number(),
      /**
       * A positive integer in cents representing the total cost of the order in the order currency
       */
      total: z.number(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
      /**
       * The email address of the customer
       */
      user_email: z.string(),
      /**
       * The full name of the customer
       */
      user_name: z.string(),
    }),
    type: z.literal(DataType.enum.orders),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/orders#the-order-object
 */
export const OrdersSchema = defineLemonSqueezySchema(
  z.array(OrderSchema.shape.data)
);

export const OrderParamsSchema = z.object({
  id: z.string(),
});

export const OrdersParamsSchema = z.object({
  /**
   * Only return orders belonging to the store with this ID
   */
  store_id: z.string().optional(),
  /**
   * Only return orders where the `user_email` field is equal to this email address
   */
  user_email: z.string().optional(),
});
