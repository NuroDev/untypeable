import type { z } from "zod";

import type {
  SubscriptionInvoiceParamsSchema,
  SubscriptionInvoiceSchema,
  SubscriptionInvoicesParamsSchema,
  SubscriptionInvoicesSchema,
} from "./subscriptionInvoice.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export type SubscriptionInvoice = z.infer<typeof SubscriptionInvoiceSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export type SubscriptionInvoices = z.infer<typeof SubscriptionInvoicesSchema>;

export type SubscriptionInvoicesParams = z.infer<
  typeof SubscriptionInvoicesParamsSchema
>;

export type SubscriptionInvoiceParams = z.infer<
  typeof SubscriptionInvoiceParamsSchema
>;
