import { z } from "zod";

import { SharedParamsSchema } from "../_shared/_shared.validators";

export const ProductParamsSchema = z.object({
  /** The ID of the product */
  id: z.number().int().positive(),
});

export const ProductSchema = z.object({
  category: z.string(),
  description: z.string(),
  id: z.number(),
  image: z.string().url(),
  price: z.number(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
  title: z.string(),
});

export const CreateProductParamsSchema = ProductSchema.omit({
  // An ID will be generated by the server
  id: true,
});

export const CreateProductSchema = ProductSchema.omit({
  rating: true,
});

export const UpdateProductParamsSchema = ProductSchema.pick({
  id: true,
}).and(ProductSchema.partial());

export const UpdateProductSchema = ProductSchema.pick({
  id: true,
}).and(ProductSchema.partial());

export const DeleteProductParamsSchema = z.object({
  /** The ID of the product to delete */
  id: z.number().int().positive(),
});

// ------------------------------------------------------------------------

export const ProductsParamsSchema = SharedParamsSchema.extend({});

export const ProductsSchema = z.array(ProductSchema);

// ------------------------------------------------------------------------

export const ProductsCategoryParamsSchema = z.object({
  /** The name of the product category */
  category: z.string(),
});

export const ProductsCategorySchema = z.array(ProductSchema);

// ------------------------------------------------------------------------

export const ProductsCategoriesParamsSchema = SharedParamsSchema.extend({});

export const ProductsCategoriesSchema = z.array(z.string());