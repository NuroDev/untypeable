import type { z } from "zod";

import type {
  CartParamsSchema,
  CartSchema,
  CartsParamsSchema,
  CartsSchema,
  CreateCartParamsSchema,
  DeleteCartParamsSchema,
  UpdateCartParamsSchema,
  UserCartsParamsSchema,
  UserCartsSchema,
} from "./cart.validators";

export type CartParams = z.infer<typeof CartParamsSchema>;
export type Cart = z.infer<typeof CartSchema>;

export type CreateCartParams = z.infer<typeof CreateCartParamsSchema>;

export type UpdateCartParams = z.infer<typeof UpdateCartParamsSchema>;

export type DeleteCartParams = z.infer<typeof DeleteCartParamsSchema>;

// ------------------------------------------------------------------------

export type CartsParams = z.infer<typeof CartsParamsSchema>;
export type Carts = z.infer<typeof CartsSchema>;

// ------------------------------------------------------------------------

export type UserCartsParams = z.infer<typeof UserCartsParamsSchema>;
export type UserCarts = z.infer<typeof UserCartsSchema>;
