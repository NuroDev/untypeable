import { z } from "zod";

import { SharedParamsSchema } from "../_shared/_shared.validators";

const SharedCartParamsSchema = SharedParamsSchema.extend({
  startdate: z.string().date(),
  enddate: z.string().date(),
}).partial();

export const CartParamsSchema = z.object({
  /** The ID of the cart */
  id: z.string(),
});

export const CartSchema = z.object({
  __v: z.number(),
  date: z.coerce.date(),
  id: z.number(),
  products: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number(),
    })
  ),
  userId: z.number(),
});

// ------------------------------------------------------------------------

export const CartsParamsSchema = SharedCartParamsSchema.extend({});

export const CartsSchema = z.array(CartSchema);

// ------------------------------------------------------------------------

export const UserCartsParamsSchema = z.object({
  /** The ID of the user */
  userId: z.number(),
});

export const UserCartsSchema = z.array(CartSchema);
