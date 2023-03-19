import { z } from "zod";

import {
  DataType,
  defineLemonSqueezySchema,
} from "../_shared/_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/stores#the-store-object
 */
export const StoreSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * The URL for the store avatar
       */
      avatar_url: z.string(),
      /**
       * The full country name for the store (e.g. `United States`, `United Kingdom`, etc)
       */
      country_nicename: z.string(),
      /**
       * The ISO 3166-1 two-letter country code for the store (e.g. `US`, `GB`, etc)
       *
       * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
       */
      country: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * The ISO 4217 currency code for the store (e.g. `USD`, `GBP`, etc)
       *
       * @see https://en.wikipedia.org/wiki/ISO_4217
       */
      currency: z.string(),
      /**
       * The domain of the store in the format `{slug}.lemonsqueezy.com`
       */
      domain: z.string(),
      /**
       * The name of the store
       */
      name: z.string(),
      /**
       * The current billing plan for the store (e.g. `fresh`, `sweet`)
       */
      plan: z.string(),
      /**
       * The slug used to identify the store
       */
      slug: z.string(),
      /**
       * A positive integer in cents representing the total revenue of the store in USD in the last 30 days
       */
      thirty_day_revenue: z.number(),
      /**
       * A count of the sales made by this store in the last 30 days
       */
      thirty_day_sales: z.number(),
      /**
       * A positive integer in cents representing the total all-time revenue of the store in USD
       */
      total_revenue: z.number(),
      /**
       * A count of the all-time total sales made by this store
       */
      total_sales: z.number(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
      /**
       * The fully-qualified URL for the store (e.g. `https://{slug}.lemonsqueezy.com)`
       */
      url: z.string(),
    }),
    type: z.literal(DataType.enum.stores),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/stores#the-store-object
 */
export const StoresSchema = defineLemonSqueezySchema(
  z.array(StoreSchema.shape.data)
);

export const StoreParamsSchema = z.object({
  id: z.string(),
});
