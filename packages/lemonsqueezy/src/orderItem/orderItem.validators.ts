import { z } from "zod";

import { DataType, defineLemonSqueezySchema } from "../_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
export const OrderItemSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * The ID of the order this order item belongs to
       */
      order_id: z.number(),
      /**
       * A positive integer in cents representing the price of this order item (in the order currency)
       *
       * Note, for “pay what you want” products the price will be whatever the customer entered at checkout
       */
      price: z.number(),
      /**
       * The ID of the product associated with this order item
       */
      product_id: z.number(),
      /**
       * The name of the product
       */
      product_name: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
      /**
       * The ID of the variant associated with this order item
       */
      variant_id: z.number(),
      /**
       * The name of the variant
       */
      variant_name: z.string(),
    }),
    type: z.literal(DataType.enum["order-items"]),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
export const OrderItemsSchema = defineLemonSqueezySchema(
  z.array(OrderItemSchema.shape.data)
);

export const OrderItemParamsSchema = z.object({
  /**
   * Only return order items belonging to the order with this ID
   */
  order_id: z.string().optional(),
  /**
   * Only return order items belonging to the product with this ID
   */
  product_id: z.string().optional(),
  /**
   * Only return order items belonging to the variant with this ID
   */
  variant_id: z.string().optional(),
});

export const OrderItemsParamsSchema = z.object({
  id: z.string(),
});
