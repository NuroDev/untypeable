import type { z } from "zod";

import type {
  Interval,
  VariantParamsSchema,
  VariantSchema,
  VariantsSchema,
} from "./variant.validators";

export type Interval = z.infer<typeof Interval>;

/**
 * @docs https://docs.lemonsqueezy.com/api/variants#the-variant-object
 */
export type Variant = z.infer<typeof VariantSchema>;

export type Variants = z.infer<typeof VariantsSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/variants#the-variant-object
 */
export type VariantParams = z.infer<typeof VariantParamsSchema>;
