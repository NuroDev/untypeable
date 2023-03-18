import type { z } from "zod";

import type {
  DiscountSchema,
  DiscountsParamsSchema,
  DiscountsSchema,
  DiscountParamsSchema,
} from "./discount.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/discounts#the-discount-object
 */
export type Discount = z.infer<typeof DiscountSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/discounts#the-discount-object
 */
export type Discounts = z.infer<typeof DiscountsSchema>;

export type DiscountsParams = z.infer<typeof DiscountsParamsSchema>;

export type DiscountParams = z.infer<typeof DiscountParamsSchema>;
