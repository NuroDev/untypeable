import { z } from "zod";

export const DataType = z.enum([
  "checkouts",
  "discounts",
  "files",
  "license-key-instances",
  "license-keys",
  "order-items",
  "orders",
  "products",
  "stores",
  "subscriptions",
  "subscription-invoices",
  "users",
  "variants",
]);

export function defineLemonSqueezySchema<TSchema extends z.ZodTypeAny>(
  dataSchema: TSchema
) {
  return z.object({
    data: dataSchema,
    errors: z
      .array(
        z.object({
          detail: z.string(),
          status: z.string().transform(Number),
          title: z.string(),
        })
      )
      .optional(),
    jsonapi: z.object({
      version: z.string().transform(Number),
    }),
    links: z.record(z.string(), z.string().url()),
  });
}
