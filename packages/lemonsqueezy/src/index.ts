import { initUntypeable } from "untypeable";

import type {
  LicenseKey,
  LicenseKeyParams,
  LicenseKeys,
  LicenseKeysParams,
} from "./licenseKey";
import type {
  LicenseKeyInstance,
  LicenseKeyInstanceParams,
  LicenseKeyInstances,
  LicenseKeyInstancesParams,
} from "./licenseKeyInstance";
import type { Order, OrderParams, Orders, OrdersParams } from "./order";
import type {
  OrderItem,
  OrderItemParams,
  OrderItems,
  OrderItemsParams,
} from "./orderItem";
import type {
  Product,
  ProductParams,
  Products,
  ProductsParams,
} from "./product";
import type { Store, Stores, StoreParams } from "./store";
import type { User } from "./user";
import type { Variant, VariantParams, Variants } from "./variant";

const u = initUntypeable();

const router = u.router({
  "/license-keys": u.input<LicenseKeysParams>().output<LicenseKeys>(),
  "/license-keys/:id": u.input<LicenseKeyParams>().output<LicenseKey>(),
  "/license-key-instances": u
    .input<LicenseKeyInstancesParams>()
    .output<LicenseKeyInstances>(),
  "/license-key-instances/:id": u
    .input<LicenseKeyInstanceParams>()
    .output<LicenseKeyInstance>(),
  "/orders": u.input<OrdersParams>().output<Orders>(),
  "/orders/:id": u.input<OrderParams>().output<Order>(),
  "/order-items": u.input<OrderItemParams>().output<OrderItems>(),
  "/order-items/:id": u.input<OrderItemsParams>().output<OrderItem>(),
  "/products": u.input<ProductsParams>().output<Products>(),
  "/products/:id": u.input<ProductParams>().output<Product>(),
  "/stores": u.output<Stores>(),
  "/stores/:id": u.input<StoreParams>().output<Store>(),
  "/users/me": u.output<User>(),
  "/variants": u.output<Variants>(),
  "/variants/:id": u.input<VariantParams>().output<Variant>(),
});

export type LemonSqueezyRouter = typeof router;

export { DataType } from "./_shared";
export type { Interval } from "./variant";
