import type { z } from "zod";

import type {
  CreateProductParamsSchema,
  CreateProductSchema,
  ProductParamsSchema,
  ProductSchema,
  ProductsCategoriesParamsSchema,
  ProductsCategoriesSchema,
  ProductsCategoryParamsSchema,
  ProductsCategorySchema,
  ProductsParamsSchema,
  ProductsSchema,
  UpdateProductParamsSchema,
  UpdateProductSchema,
} from "./products.validators";

export type ProductParams = z.infer<typeof ProductParamsSchema>;
export type Product = z.infer<typeof ProductSchema>;

export type CreateProductParams = z.infer<typeof CreateProductParamsSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;

export type UpdateProductParams = z.infer<typeof UpdateProductParamsSchema>;
export type UpdateProduct = z.infer<typeof UpdateProductSchema>;

export type DeleteProductParams = z.infer<typeof ProductParamsSchema>;

// ------------------------------------------------------------------------

export type ProductsParams = z.infer<typeof ProductsParamsSchema>;
export type Products = z.infer<typeof ProductsSchema>;

// ------------------------------------------------------------------------

export type ProductsCategoryParams = z.infer<
  typeof ProductsCategoryParamsSchema
>;
export type ProductsCategory = z.infer<typeof ProductsCategorySchema>;

// ------------------------------------------------------------------------

export type ProductsCategoriesParams = z.infer<
  typeof ProductsCategoriesParamsSchema
>;
export type ProductsCategories = z.infer<typeof ProductsCategoriesSchema>;
