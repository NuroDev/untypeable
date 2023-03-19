import type { z } from "zod";

import type {
  BillingAddressSchema,
  CheckoutDataSchema,
  CheckoutOptionsSchema,
  CheckoutParamsSchema,
  CheckoutPreviewSchema,
  CheckoutSchema,
  CheckoutsSchema,
  CheckoutsParamsSchema,
  CreateCheckoutBodySchema,
  CreateCheckoutParamsSchema,
  ProductParamsSchema,
} from "./checkout.validators";

export type BillingAddress = z.infer<typeof BillingAddressSchema>;
export type CheckoutData = z.infer<typeof CheckoutDataSchema>;
export type CheckoutOptions = z.infer<typeof CheckoutOptionsSchema>;
export type CheckoutPreview = z.infer<typeof CheckoutPreviewSchema>;
export type ProductParams = z.infer<typeof ProductParamsSchema>;
/**
 * @docs https://docs.lemonsqueezy.com/api/checkouts#the-checkout-object
 */
export type Checkout = z.infer<typeof CheckoutSchema>;
/**
 * @docs https://docs.lemonsqueezy.com/api/checkouts#the-checkout-object
 */
export type Checkouts = z.infer<typeof CheckoutsSchema>;
export type CreateCheckoutParams = z.infer<typeof CreateCheckoutParamsSchema>;
export type CreateCheckoutBody = z.infer<typeof CreateCheckoutBodySchema>;
export type CheckoutsParams = z.infer<typeof CheckoutsParamsSchema>;
export type CheckoutParams = z.infer<typeof CheckoutParamsSchema>;
