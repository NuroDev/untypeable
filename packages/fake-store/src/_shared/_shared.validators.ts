import { z } from "zod";

export const SharedParamsSchema = z
  .object({
    /** Limit results */
    limit: z.number().int().positive(),
    /**
     * Sort results
     *
     * Default value is in ascending mode, you can use with `desc or `asc as you want.
     */
    order: z.union([z.literal("asc"), z.literal("desc")]),
  })
  .partial();
