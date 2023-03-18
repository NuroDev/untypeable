import { z } from "zod";

import { DataType, defineLemonSqueezySchema } from "./_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/discounts#the-discount-object
 */
export const DiscountSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * The type of the amount. Either `percent` or `fixed`
       */
      amount_type: z.enum(["percent", "fixed"]),
      /**
       * The amount of discount to apply to the order
       *
       * Either a fixed amount or a percentage depending on the value of `amount_type`
       */
      amount: z.number(),
      /**
       * The discount code that can be used at checkout
       */
      code: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * If `duration` is `repeating`, this specifies how many months the discount should apply
       */
      duration_in_months: z.number(),
      /**
       * If the discount is applied to a subscription, this specifies how often the discount should be applied.
       *
       * One of `once`, `repeating`, `forever`
       */
      duration: z.enum(["once", "repeating", "forever"]),
      /**
       * An ISO-8601 formatted date-time string indicating when the discount expires
       *
       * Can be `null` if no expiration date is specified
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      expires_at: z.string().datetime().nullable(),
      /**
       * Has the value `true` if the discount can only be redeemed a limited number of times
       */
      is_limited_redemptions: z.boolean(),
      /**
       * Has the value `true` if the discount can only be applied to certain products/variants
       */
      is_limited_to_products: z.boolean(),
      /**
       * If `is_limited_redemptions` is `true`, this is the maximum number of redemptions
       */
      max_redemptions: z.number(),
      /**
       * The name of the discount
       */
      name: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the discount is valid from
       *
       * Can be `null` if no start date is specified
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      starts_at: z.string().datetime().nullable(),
      /**
       * The formatted status of the discount
       */
      status_formatted: z.string(),
      /**
       * The status of the discount. Either `draft` or `published`
       */
      status: z.enum(["draft", "published"]),
      /**
       * The ID of the store this discount belongs to
       */
      store_id: z.number(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
    }),
    type: z.literal(DataType.enum.discounts),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/discounts#the-discount-object
 */
export const DiscountsSchema = defineLemonSqueezySchema(
  z.array(DiscountSchema.shape.data)
);

export const DiscountsParamsSchema = z.object({
  /**
   * Only return discounts belonging to the store with this ID
   */
  store_id: z.number().optional(),
});

export const DiscountParamsSchema = z.object({
  id: z.string(),
});
