import type { z } from "zod";

import type {
  ProductParamsSchema,
  ProductSchema,
  ProductsParamsSchema,
  ProductsSchema,
} from "./product.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/products#the-product-object
 */
export type Product = z.infer<typeof ProductSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/products#the-product-object
 */
export type Products = z.infer<typeof ProductsSchema>;

export type ProductsParams = z.infer<typeof ProductsParamsSchema>;

export type ProductParams = z.infer<typeof ProductParamsSchema>;
