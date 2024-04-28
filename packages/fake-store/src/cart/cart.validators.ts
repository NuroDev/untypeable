import { z } from "zod";

import { SharedParamsSchema } from "../_shared/_shared.validators";

const SharedCartParamsSchema = SharedParamsSchema.extend({
  startdate: z.string().date(),
  enddate: z.string().date(),
}).partial();

export const CartParamsSchema = z.object({
  /** The ID of the cart */
  id: z.number().int().positive(),
});

export const CartSchema = z.object({
  __v: z.number().optional(),
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

export const CreateCartParamsSchema = CartSchema.omit({
  __v: true,
  // An ID will be generated by the server
  id: true,
});

export const UpdateCartParamsSchema = CartSchema.pick({
  id: true,
}).and(CartSchema.partial());

export const UpdatedCartSchema = CartSchema.pick({
  id: true,
}).and(CartSchema.partial());

export const DeleteCartParamsSchema = z.object({
  /** The ID of the Cart to delete */
  id: z.number().int().positive(),
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