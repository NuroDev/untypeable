import { initUntypeable } from "untypeable";

import type {
  Checkout,
  CheckoutParams,
  Checkouts,
  CheckoutsParams,
  CreateCheckoutParams,
} from "./checkout/checkout.types";
import type {
  Discount,
  DiscountParams,
  Discounts,
  DiscountsParams,
} from "./discount/discount.types";
import type { File, FileParams, Files, FilesParams } from "./file/file.types";
import type {
  LicenseKey,
  LicenseKeyParams,
  LicenseKeys,
  LicenseKeysParams,
} from "./licenseKey/licenseKey.types";
import type {
  LicenseKeyInstance,
  LicenseKeyInstanceParams,
  LicenseKeyInstances,
  LicenseKeyInstancesParams,
} from "./licenseKeyInstance/licenseKeyInstance.types";
import type {
  Order,
  OrderParams,
  Orders,
  OrdersParams,
} from "./order/order.types";
import type {
  OrderItem,
  OrderItemParams,
  OrderItems,
  OrderItemsParams,
} from "./orderItem/orderItem.types";
import type {
  Product,
  ProductParams,
  Products,
  ProductsParams,
} from "./product/product.types";
import type { Store, Stores, StoreParams } from "./store/store.types";
import type {
  DeleteSubscriptionParams,
  Subscription,
  SubscriptionParams,
  Subscriptions,
  SubscriptionsParams,
} from "./subscription/subscription.types";
import type {
  SubscriptionInvoice,
  SubscriptionInvoiceParams,
  SubscriptionInvoices,
  SubscriptionInvoicesParams,
} from "./subscriptionInvoice/subscriptionInvoice.types";
import type { User } from "./user/user.types";
import type { Variant, VariantParams, Variants } from "./variant/variant.types";

const u = initUntypeable().pushArg<"GET" | "POST" | "PATCH" | "DELETE">();

const router = u.router({
  "/checkouts": {
    GET: u.input<CheckoutsParams>().output<Checkouts>(),
    POST: u.input<CreateCheckoutParams>().output<Checkout>(),
  },
  "/checkouts/:id": { GET: u.input<CheckoutParams>().output<Checkout>() },
  "/discounts": { GET: u.input<DiscountsParams>().output<Discounts>() },
  "/discounts/:id": { GET: u.input<DiscountParams>().output<Discount>() },
  "/files": { GET: u.input<FilesParams>().output<Files>() },
  "/files/:id": { GET: u.input<FileParams>().output<File>() },
  "/license-keys": { GET: u.input<LicenseKeysParams>().output<LicenseKeys>() },
  "/license-keys/:id": {
    GET: u.input<LicenseKeyParams>().output<LicenseKey>(),
  },
  "/license-key-instances": {
    GET: u.input<LicenseKeyInstancesParams>().output<LicenseKeyInstances>(),
  },
  "/license-key-instances/:id": {
    GET: u.input<LicenseKeyInstanceParams>().output<LicenseKeyInstance>(),
  },
  "/orders": { GET: u.input<OrdersParams>().output<Orders>() },
  "/orders/:id": { GET: u.input<OrderParams>().output<Order>() },
  "/order-items": { GET: u.input<OrderItemParams>().output<OrderItems>() },
  "/order-items/:id": { GET: u.input<OrderItemsParams>().output<OrderItem>() },
  "/products": { GET: u.input<ProductsParams>().output<Products>() },
  "/products/:id": { GET: u.input<ProductParams>().output<Product>() },
  "/stores": { GET: u.output<Stores>() },
  "/stores/:id": { GET: u.input<StoreParams>().output<Store>() },
  "/subscriptions": {
    GET: u.input<SubscriptionsParams>().output<Subscriptions>(),
  },
  "/subscriptions/:id": {
    DELETE: u.input<DeleteSubscriptionParams>().output<Subscription>(),
    GET: u.input<SubscriptionParams>().output<Subscription>(),
  },
  "/subscription-invoices": {
    GET: u.input<SubscriptionInvoicesParams>().output<SubscriptionInvoices>(),
  },
  "/subscription-invoices/:id": {
    GET: u.input<SubscriptionInvoiceParams>().output<SubscriptionInvoice>(),
  },
  "/users/me": { GET: u.output<User>() },
  "/variants": { GET: u.output<Variants>() },
  "/variants/:id": { GET: u.input<VariantParams>().output<Variant>() },
});

export type LemonSqueezyRouter = typeof router;

export type {
  BillingAddress,
  CheckoutData,
  CheckoutOptions,
  CheckoutPreview,
} from "./checkout/checkout.types";
export { DataType } from "./_shared/_shared.validators";
export type { Interval } from "./variant/variant.types";
