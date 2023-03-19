import { z } from "zod";

import { DataType, defineLemonSqueezySchema } from "../_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/products#the-product-object
 */
export const ProductSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * A URL to purchase this product using the Lemon Squeezy checkout
       */
      buy_now_url: z.string().url(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * The description of the product in HTML
       */
      description: z.string(),
      /**
       * If this product has multiple variants, this will be a positive integer in cents representing the price of the cheapest variant.
       *
       * Otherwise, it will be `null`
       */
      from_price: z.unknown().nullable(),
      /**
       * A URL to the large thumbnail image for this product (if one exists).
       *
       * The image will be 1000x1000px in size
       */
      large_thumb_url: z.string().url().nullable(),
      /**
       * The name of the product
       */
      name: z.string(),
      /**
       * Has the value true if this is a “pay what you want” product where the price can be set by the customer at checkout
       */
      pay_what_you_want: z.boolean(),
      /**
       * A human-readable string representing the price of the product (e.g. `$9.99`)
       */
      price_formatted: z.string(),
      /**
       * A positive integer in cents representing the price of the product
       */
      price: z.number(),
      /**
       * The slug used to identify the product
       */
      slug: z.string(),
      /**
       * The formatted status of the product
       */
      status_formatted: z.string(),
      /**
       * The status of the product. Either `draft` or `published`
       */
      status: z.enum(["draft", "published"]),
      /**
       * The ID of the store this product belongs to
       */
      store_id: z.number(),
      /**
       * A URL to the thumbnail image for this product (if one exists).
       *
       * The image will be 100x100px in size
       */
      thumb_url: z.string().url().nullable(),
      /**
       * If this product has multiple variants, this will be a positive integer in cents representing the price of the most expensive variant.
       *
       * Otherwise, it will be `null`
       */
      to_price: z.unknown().nullable(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
    }),
    type: z.literal(DataType.enum.products),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/products#the-product-object
 */
export const ProductsSchema = defineLemonSqueezySchema(
  z.array(ProductSchema.shape.data)
);

export const ProductsParamsSchema = z.object({
  /**
   * Only return products belonging to the store with this ID
   */
  store_id: z.string().optional(),
});

export const ProductParamsSchema = z.object({
  id: z.string(),
});
