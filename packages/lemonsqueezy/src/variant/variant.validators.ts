import { z } from "zod";

import {
  DataType,
  defineLemonSqueezySchema,
} from "../_shared/_shared.validators";

export const Interval = z.enum(["day", "week", "month", "year"]);

/**
 * @docs https://docs.lemonsqueezy.com/api/variants#the-variant-object
 */
export const VariantSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * The description of the variant in HTML
       */
      description: z.string().nullable(),
      /**
       * Has the value `true` if this variant has a free trial period
       *
       * Only available if the variant is a subscription
       */
      has_free_trial: z.boolean(),
      /**
       * Has the value `true` if this variant should generate license keys for the customer on purchase
       */
      has_license_keys: z.boolean(),
      /**
       * If this variant is a subscription, this is the number of intervals (specified in the `interval` attribute) between subscription billings
       *
       * For example, `interval=month` and `interval_count=3` bills every 3 months
       */
      interval_count: z.number().nullable(),
      /**
       * If this variant is a subscription, this is the frequency at which a subscription is billed
       *
       * One of `day`, `week`, `month` or `year`
       */
      interval: Interval.nullable(),
      /**
       * Has the value `true` if license keys should never expire
       *
       * Note: If the variant is a subscription, the license key expiration will be linked to the status of the subscription (e.g. the license will expire when the subscription expires)
       */
      is_license_length_unlimited: z.boolean(),
      /**
       * Has the value `true` if license key activations are unlimited for this variant
       */
      is_license_limit_unlimited: z.boolean(),
      /**
       * Has the value `true` if this variant is a subscription
       */
      is_subscription: z.boolean(),
      /**
       * The maximum number of times a license key can be activated for this variant
       */
      license_activation_limit: z.number(),
      /**
       * The unit linked with the `license_length_value` attribute. One of `days`, `months` or `years`
       *
       * For example, `license_length_value=3` and `license_length_unit=months` license keys will expire after 3 months
       */
      license_length_unit: z.string(),
      /**
       * The number of units (specified in the `license_length_unit` attribute) until a license key expires
       */
      license_length_value: z.number(),
      /**
       * If `pay_what_you_want` is `true`, this is the minimum price this variant can be purchased for, as a positive integer in cents
       */
      min_price: z.number(),
      /**
       * The name of the variant
       */
      name: z.string(),
      /**
       * Has the value `true` if this is a “pay what you want” variant where the price can be set by the customer at checkout
       */
      pay_what_you_want: z.boolean(),
      /**
       * A positive integer in cents representing the price of the variant
       */
      price: z.number(),
      /**
       * The ID of the product this variant belongs to
       */
      product_id: z.number(),
      /**
       * The slug used to identify the variant
       */
      slug: z.string(),
      /**
       * An integer representing the order of this variant when displayed on the checkout
       */
      sort: z.number(),
      /**
       * The formatted status of the variant
       */
      status_formatted: z.string(),
      /**
       * The status of the variant
       *
       * Either `pending`, `draft` or `published`
       *
       * If a variant has a `pending` status, it is considered the “default” variant and is not shown as a separate option at checkout
       */
      status: z.enum(["pending", "draft", "published"]),
      /**
       * If `pay_what_you_want` is `true`, this is the suggested price for this variant shown at checkout, as a positive integer in cents
       */
      suggested_price: z.number(),
      /**
       * If interval count of the free trial.
       *
       * For example, a variant with `trial_interval=day` and `trial_interval_count=14` would have a free trial that lasts 14 days
       */
      trial_interval_count: z.number(),
      /**
       * The interval unit of the free trial
       *
       * One of `day`, `week`, `month` or `year`
       */
      trial_interval: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
    }),
    type: z.literal(DataType.enum.variants),
    id: z.string(),
  })
);

export const VariantsSchema = defineLemonSqueezySchema(
  z.array(VariantSchema.shape.data)
);

/**
 * @docs https://docs.lemonsqueezy.com/api/variants#the-variant-object
 */
export const VariantParamsSchema = z.object({
  /**
   * Product ID
   *
   * Only return variants belonging to the product with this ID
   */
  id: z.string().optional(),
});
