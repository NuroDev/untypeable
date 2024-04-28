import { initUntypeable } from "untypeable";

import {
  CreateProductParamsSchema,
  CreateProductSchema,
  DeleteProductParamsSchema,
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
} from "./products/products.validators";

const u = initUntypeable().args<
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  string
>();

const cartRouter = u.router({
  DELETE: {
    /** Delete a cart */
    "/carts/:id": u.input().output(),
  },
  GET: {
    /** Get all carts */
    "/carts": u.input().output(),
    /** Get a single cart */
    "/carts/:id": u.input().output(),
    /** Get user carts */
    "/carts/user/:userId": u.input().output(),
  },
  PATCH: {
    /** Update a product */
    "/carts/:id": u.input().output(),
  },
  POST: {
    /** Add a new product */
    "/carts": u.input().output(),
  },
  PUT: {
    /** Update a product */
    "/carts/:id": u.input().output(),
  },
});

const loginRouter = u.router({
  DELETE: {},
  GET: {},
  PATCH: {},
  POST: {},
  PUT: {},
});

const productRouter = u.router({
  DELETE: {
    /** Delete a product */
    "/products/:id": u.input(DeleteProductParamsSchema).output(ProductSchema),
  },
  GET: {
    /** Get all products */
    "/products": u.input(ProductsParamsSchema).output(ProductsSchema),
    /** Get a single product */
    "/products/:id": u.input(ProductParamsSchema).output(ProductSchema),
    /** Get all categories */
    "/products/categories": u
      .input(ProductsCategoriesParamsSchema)
      .output(ProductsCategoriesSchema),
    /** Get products in a specific category */
    "/products/category/:category": u
      .input(ProductsCategoryParamsSchema)
      .output(ProductsCategorySchema),
  },
  PATCH: {
    /** Update a product */
    "/products/:id": u
      .input(UpdateProductParamsSchema)
      .output(UpdateProductSchema),
  },
  POST: {
    /** Add a new product */
    "/products": u.input(CreateProductParamsSchema).output(CreateProductSchema),
  },
  PUT: {
    /** Update a product */
    "/products/:id": u
      .input(UpdateProductParamsSchema)
      .output(UpdateProductSchema),
  },
});

const userRouter = u.router({
  DELETE: {},
  GET: {},
  PATCH: {},
  POST: {},
  PUT: {},
});

export const fakeStoreSafeRouter = u
  .router({})
  .merge(productRouter)
  .merge(cartRouter)
  .merge(userRouter)
  .merge(loginRouter);
