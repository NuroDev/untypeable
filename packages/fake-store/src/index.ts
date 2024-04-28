import { initUntypeable } from "untypeable";

import type {
  Cart,
  CartParams,
  Carts,
  CartsParams,
  CreateCartParams,
  DeleteCartParams,
  UpdateCartParams,
  UserCartsParams,
} from "./cart/cart.types";
import type {
  Product,
  ProductsParams,
  Products,
  CreateProductParams,
  UpdateProductParams,
  ProductParams,
  ProductsCategories,
  ProductsCategoriesParams,
  ProductsCategoryParams,
  ProductsCategory,
  DeleteProductParams,
  UpdateProduct,
  CreateProduct,
} from "./products/products.types";

const u = initUntypeable().args<
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  string
>();

const cartRouter = u.router({
  DELETE: {
    /** Delete a cart */
    "/carts/:id": u.input<DeleteCartParams>().output<Cart>(),
  },
  GET: {
    /** Get all carts */
    "/carts": u.input<CartsParams>().output<Carts>(),
    /** Get a single cart */
    "/carts/:id": u.input<CartParams>().output<Cart>(),
    /** Get user carts */
    "/carts/user/:userId": u.input<UserCartsParams>().output<UserCartsParams>(),
  },
  PATCH: {
    /** Update a product */
    "/carts/:id": u.input<UpdateCartParams>().output<Cart>(),
  },
  POST: {
    /** Add a new product */
    "/carts": u.input<CreateCartParams>().output<Cart>(),
  },
  PUT: {
    /** Update a product */
    "/carts/:id": u.input<UpdateCartParams>().output<Cart>(),
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
    "/products/:id": u.input<DeleteProductParams>().output<Product>(),
  },
  GET: {
    /** Get all products */
    "/products": u.input<ProductsParams>().output<Products>(),
    /** Get a single product */
    "/products/:id": u.input<ProductParams>().output<Product>(),
    /** Get all categories */
    "/products/categories": u
      .input<ProductsCategoriesParams>()
      .output<ProductsCategories>(),
    /** Get products in a specific category */
    "/products/category/:category": u
      .input<ProductsCategoryParams>()
      .output<ProductsCategory>(),
  },
  PATCH: {
    /** Update a product */
    "/products/:id": u.input<UpdateProductParams>().output<UpdateProduct>(),
  },
  POST: {
    /** Add a new product */
    "/products": u.input<CreateProductParams>().output<CreateProduct>(),
  },
  PUT: {
    /** Update a product */
    "/products/:id": u.input<UpdateProductParams>().output<UpdateProduct>(),
  },
});

const userRouter = u.router({
  DELETE: {},
  GET: {},
  PATCH: {},
  POST: {},
  PUT: {},
});

const router = u
  .router({})
  .merge(productRouter)
  .merge(cartRouter)
  .merge(userRouter)
  .merge(loginRouter);

export type FakeStoreRouter = typeof router;
