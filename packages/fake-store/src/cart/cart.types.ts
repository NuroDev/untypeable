import type { z } from "zod";

import type {
  CartParamsSchema,
  CartSchema,
  CartsParamsSchema,
  CartsSchema,
  UserCartsParamsSchema,
  UserCartsSchema,
} from "./cart.validators";

export type CartParams = z.infer<typeof CartParamsSchema>;
export type Cart = z.infer<typeof CartSchema>;

// ------------------------------------------------------------------------

export type CartsParams = z.infer<typeof CartsParamsSchema>;
export type Carts = z.infer<typeof CartsSchema>;

// ------------------------------------------------------------------------

export type UserCartsParams = z.infer<typeof UserCartsParamsSchema>;
export type UserCarts = z.infer<typeof UserCartsSchema>;
