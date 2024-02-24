import { z } from "zod";

import { GlobalParamsSchema, UUIDSchema } from "../_shared/_shared.validators";

export const PlainSchema = UUIDSchema;

export const PlainBulkParamsSchema = GlobalParamsSchema.extend({
  count: z.number().int().positive().max(20000),
});

// TODO: Improve this schema to check for UUID's broken up with a new line.
export const PlainBulkSchema = z.string();

export const PlainMapParamsSchema = GlobalParamsSchema.extend({
  key: z.string().min(1),
});

export const PlainMapSchema = UUIDSchema;

export const PlainNamespaceMapParamsSchema = GlobalParamsSchema.extend({
  namespace: z.string().min(1),
  key: z.string().min(1),
});

export const PlainNamespaceMapSchema = UUIDSchema;
