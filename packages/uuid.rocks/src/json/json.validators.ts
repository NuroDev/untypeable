import { z } from "zod";

import { GlobalParamsSchema, UUIDSchema } from "../_shared/_shared.validators";

export const JsonSchema = z.object({
  apiVersion: z.string(),
  is_readable_uuid: z.boolean(),
  is_short_uuid: z.boolean(),
  is_ulid: z.boolean(),
  timestamp: z.coerce.date(),
  uuid: UUIDSchema,
});

export const JsonBulkParamsSchema = GlobalParamsSchema.extend({
  count: z.number().int().positive().max(20000),
});

export const JsonBulkSchema = z.object({
  apiVersion: z.string(),
  is_readable_uuid: z.boolean(),
  uuids: z.array(UUIDSchema),
  timestamp: z.coerce.date(),
});

export const JsonMapParamsSchema = GlobalParamsSchema.extend({
  key: z.string().min(1),
});

export const JsonMapSchema = z.object({
  apiVersion: z.string(),
  created_at: z.coerce.date(),
  message: z.string(),
  timestamp: z.coerce.date(),
  uuid: UUIDSchema,
});
