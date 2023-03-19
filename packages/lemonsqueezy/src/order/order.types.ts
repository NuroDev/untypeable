import type { z } from "zod";

import type {
  OrderParamsSchema,
  OrderSchema,
  OrdersParamsSchema,
  OrdersSchema,
} from "./order.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/orders#the-order-object
 */
export type Order = z.infer<typeof OrderSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/orders#the-order-object
 */
export type Orders = z.infer<typeof OrdersSchema>;

export type OrderParams = z.infer<typeof OrderParamsSchema>;

export type OrdersParams = z.infer<typeof OrdersParamsSchema>;
