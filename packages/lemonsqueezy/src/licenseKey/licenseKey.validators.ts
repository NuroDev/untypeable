import { z } from "zod";

import { DataType, defineLemonSqueezySchema } from "../_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/license-keys#the-license-key-object
 */
export const LicenseKeySchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * The activation limit of this license key
       */
      activation_limit: z.number(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * Has the value `true` if this license key has been disabled
       */
      disabled: z.number(),
      /**
       * An ISO-8601 formatted date-time string indicating when the license key expires
       *
       * Can be null if the license key is perpetual
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      expires_at: z.string().datetime().nullable(),
      /**
       * A count of the number of instances this license key has been activated on
       */
      instances_count: z.number(),
      /**
       * A “short” representation of the license key, made up of the string “XXXX-” followed by the last 12 characters of the license key
       */
      key_short: z.string(),
      /**
       * The ID of the order associated with this license key
       */
      order_id: z.number(),
      /**
       * The ID of the order item associated with this license key
       */
      order_item_id: z.number(),
      /**
       * The ID of the product associated with this license key
       */
      product_id: z.number(),
      /**
       * The formatted status of the license key
       */
      status_formatted: z.string(),
      /**
       * The status of the license key
       *
       * One of `inactive`, `active`, `expired`, `disabled`
       */
      status: z.enum(["inactive", "active", "expired", "disabled"]),
      /**
       * The ID of the store this license key belongs to
       */
      store_id: z.number(),
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
    type: z.literal(DataType.enum["license-keys"]),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/license-keys#the-license-key-object
 */
export const LicenseKeysSchema = defineLemonSqueezySchema(
  z.array(LicenseKeySchema.shape.data)
);

export const LicenseKeysParamsSchema = z.object({
  /**
   * Only return license keys belonging to the order with this ID
   */
  order_id: z.string().optional(),
  /**
   * Only return license keys belonging to the order item with this ID
   */
  order_item_id: z.string().optional(),
  /**
   * Only return license keys belonging to the product with this ID
   */
  product_id: z.string().optional(),
  /**
   * Only return license keys belonging to the store with this ID
   */
  store_id: z.string().optional(),
});

export const LicenseKeyParamsSchema = z.object({
  id: z.string(),
});
