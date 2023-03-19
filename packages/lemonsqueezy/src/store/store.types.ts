import type { z } from "zod";

import type {
  StoreParamsSchema,
  StoreSchema,
  StoresSchema,
} from "./store.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/stores#the-store-object
 */
export type Store = z.infer<typeof StoreSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/stores#the-store-object
 */
export type Stores = z.infer<typeof StoresSchema>;

export type StoreParams = z.infer<typeof StoreParamsSchema>;
