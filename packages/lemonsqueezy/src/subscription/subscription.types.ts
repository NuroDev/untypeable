import type { z } from "zod";

import type {
  DeleteSubscriptionParamsSchema,
  SubscriptionParamsSchema,
  SubscriptionPauseSchema,
  SubscriptionsSchema,
  SubscriptionSchema,
  SubscriptionsParamsSchema,
} from "./subscription.validators";

export type SubscriptionPause = z.infer<typeof SubscriptionPauseSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export type Subscription = z.infer<typeof SubscriptionSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export type Subscriptions = z.infer<typeof SubscriptionsSchema>;

export type SubscriptionsParams = z.infer<typeof SubscriptionsParamsSchema>;

export type SubscriptionParams = z.infer<typeof SubscriptionParamsSchema>;

export type DeleteSubscriptionParams = z.infer<
  typeof DeleteSubscriptionParamsSchema
>;
