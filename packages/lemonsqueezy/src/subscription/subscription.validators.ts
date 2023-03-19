import { z } from "zod";

import {
  DataType,
  defineLemonSqueezySchema,
} from "../_shared/_shared.validators";

export const SubscriptionPauseSchema = z.object({
  /**
   * Defines payment pause behaviour, can be one of:
   *
   *  - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged
   *  - `free` - Offer your subscription services for free, whilst halting payment collection
   */
  mode: z.enum(["void", "free"]),
  /**
   * An ISO-8601 formatted date-time string indicating when the subscription will continue collecting payments
   *
   * @see https://en.wikipedia.org/wiki/ISO_8601
   */
  resumes_at: z.string().datetime(),
});

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export const SubscriptionSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * An integer representing a day of the month (`21` equals `21st day of the month`)
       *
       * This is the day of which subscription invoice payments are collected
       */
      billing_anchor: z.number(),
      /**
       * A boolean indicating if the subscription has been cancelled
       */
      cancelled: z.boolean(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * If the subscription has been cancelled, this will be an ISO-8601 formatted date-time string indicating when the subscription expires
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      ends_at: z.string().datetime().nullable(),
      /**
       * The ID of the order associated with this subscription
       */
      order_id: z.number(),
      /**
       * The ID of the order item associated with this subscription
       */
      order_item_id: z.number(),
      /**
       * An object containing the payment collection pause behaviour options for the subscription, if set
       *
       * The pause object can be null, which indicates payment collection is not paused
       */
      pause: SubscriptionPauseSchema.nullable(),
      /**
       * The ID of the product associated with this subscription
       */
      product_id: z.number(),
      /**
       * The name of the product
       */
      product_name: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating the end of the current billing cycle, and when the next invoice will be issued
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      renews_at: z.string().datetime(),
      /**
       * The formatted status of the subscription
       */
      status_formatted: z.string(),
      /**
       * The status of the subscription
       *
       * One of `on_trial`, `active`, `cancelled`, `expired`
       */
      status: z.enum(["on_trial", "active", "cancelled", "expired"]),
      /**
       * The ID of the store this subscription belongs to
       */
      store_id: z.number(),
      /**
       * A boolean indicating if the returned subscription object was created within test mode
       */
      test_mode: z.boolean(),
      /**
       * If the subscription has a free trial, this will be an ISO-8601 formatted date-time string indicating when the trial period ends
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      trial_ends_at: z.string().datetime().nullable(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
      /**
       * An object of customer-facing URLs for managing the subscription
       */
      urls: z.object({
        /**
         * A pre-signed URL for managing payment and billing information for the subscription
         *
         * This can be used in conjunction with Lemon.js to allow your customer to change their billing information from within your application
         *
         * The URL is valid for 24 hours from time of request
         *
         * @docs https://docs.lemonsqueezy.com/help/lemonjs/what-is-lemonjs
         */
        update_payment_method: z.string().url(),
      }),
      /**
       * The email address of the customer
       */
      user_email: z.string(),
      /**
       * The full name of the customer
       */
      user_name: z.string(),
      /**
       * The ID of the variant associated with this subscription
       */
      variant_id: z.number(),
      /**
       * The name of the variant
       */
      variant_name: z.string(),
    }),
    type: z.literal(DataType.enum.subscriptions),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export const SubscriptionsSchema = defineLemonSqueezySchema(
  z.array(SubscriptionSchema.shape.data)
);

export const SubscriptionsParamsSchema = z.object({
  /**
   * Only return subscriptions belonging to the order with this ID
   */
  order_id: z.string().optional(),
  /**
   * Only return subscriptions belonging to the order item with this ID
   */
  order_item_id: z.string().optional(),
  /**
   * Only return subscriptions belonging to the product with this ID
   */
  product_id: z.string().optional(),
  /**
   * Only return subscriptions belonging to the store with this ID
   */
  store_id: z.string().optional(),
  /**
   * Only return subscriptions belonging to the variant with this ID
   */
  variant_id: z.string().optional(),
});

export const SubscriptionParamsSchema = z.object({
  id: z.string(),
});

export const DeleteSubscriptionParamsSchema = z.object({
  id: z.string(),
});
