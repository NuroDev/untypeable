import { z } from "zod";

export function defineSWAPIPaginatedSchema<TSchema extends z.ZodTypeAny>(
  dataSchema: TSchema
) {
  return z.object({
    count: z.number(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(dataSchema),
  });
}
