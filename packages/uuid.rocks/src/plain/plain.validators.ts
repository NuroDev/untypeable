import { z } from "zod";

import { UUIDSchema } from "../_shared/_shared.validators";

export const PlainSchema = UUIDSchema;

export const PlainBulkParamsSchema = z.object({
  count: z.number().int().positive().max(20000),
});
export const PlainBulkSchema = z.string(); // TODO: Improve this schema to check for UUID's broken up with a new line.

export const PlainMapParamsSchema = z.object({
  key: z.string().min(1),
});
export const PlainMapSchema = UUIDSchema;

export const PlainNamespaceMapParamsSchema = z.object({
  namespace: z.string().min(1),
  key: z.string().min(1),
});
export const PlainNamespaceMapSchema = UUIDSchema;
