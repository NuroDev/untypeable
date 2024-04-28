import { initUntypeable } from "untypeable";

import {
  CartSchema,
  CartParamsSchema,
  CartsSchema,
  CartsParamsSchema,
  CreateCartParamsSchema,
  DeleteCartParamsSchema,
  UpdateCartParamsSchema,
  UserCartsParamsSchema,
} from "./cart/cart.validators";
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
import {
  CreateUserSchema,
  CreateUserParamsSchema,
  DeleteUserParamsSchema,
  UpdateUserSchema,
  UpdateUserParamsSchema,
  UserSchema,
  UserParamsSchema,
  UsersSchema,
  UsersParamsSchema,
} from "./user/user.validators";

const u = initUntypeable().args<
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  string
>();

const cartRouter = u.router({
  DELETE: {
    /** Delete a cart */
    "/carts/:id": u.input(DeleteCartParamsSchema).output(CartSchema),
  },
  GET: {
    /** Get all carts */
    "/carts": u.input(CartsParamsSchema).output(CartsSchema),
    /** Get a single cart */
    "/carts/:id": u.input(CartParamsSchema).output(CartSchema),
    /** Get user carts */
    "/carts/user/:userId": u
      .input(UserCartsParamsSchema)
      .output(UserCartsParamsSchema),
  },
  PATCH: {
    /** Update a product */
    "/carts/:id": u.input(UpdateCartParamsSchema).output(CartSchema),
  },
  POST: {
    /** Add a new product */
    "/carts": u.input(CreateCartParamsSchema).output(CartSchema),
  },
  PUT: {
    /** Update a product */
    "/carts/:id": u.input(UpdateCartParamsSchema).output(CartSchema),
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
  DELETE: {
    /** Delete a user */
    "/users/:id": u.input(DeleteUserParamsSchema).output(UserSchema),
  },
  GET: {
    /** Get all users */
    "/users": u.input(UsersParamsSchema).output(UsersSchema),
    /** Get a single user */
    "/users/:id": u.input(UserParamsSchema).output(UserSchema),
  },
  PATCH: {
    /** Update a users */
    "/users/:id": u.input(UpdateUserParamsSchema).output(UpdateUserSchema),
  },
  POST: {
    /** Add a new user */
    "/users": u.input(CreateUserParamsSchema).output(CreateUserSchema),
  },
  PUT: {
    /** Update a users */
    "/users/:id": u.input(UpdateUserParamsSchema).output(UpdateUserSchema),
  },
});

export const fakeStoreSafeRouter = u
  .router({})
  .merge(productRouter)
  .merge(cartRouter)
  .merge(userRouter)
  .merge(loginRouter);
