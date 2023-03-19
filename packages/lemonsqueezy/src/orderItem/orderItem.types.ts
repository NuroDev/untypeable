import type { z } from "zod";

import type {
  OrderItemParamsSchema,
  OrderItemsParamsSchema,
  OrderItemSchema,
  OrderItemsSchema,
} from "./orderItem.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
export type OrderItem = z.infer<typeof OrderItemSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
export type OrderItems = z.infer<typeof OrderItemsSchema>;

export type OrderItemParams = z.infer<typeof OrderItemParamsSchema>;

export type OrderItemsParams = z.infer<typeof OrderItemsParamsSchema>;
