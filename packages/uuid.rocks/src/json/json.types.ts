import type { z } from "zod";

import type {
  JsonBulkParamsSchema,
  JsonBulkSchema,
  JsonMapParamsSchema,
  JsonMapSchema,
  JsonSchema,
} from "./json.validators";

export type Json = z.infer<typeof JsonSchema>;

export type JsonBulkParams = z.infer<typeof JsonBulkParamsSchema>;
export type JsonBulk = z.infer<typeof JsonBulkSchema>;

export type JsonMapParams = z.infer<typeof JsonMapParamsSchema>;
export type JsonMap = z.infer<typeof JsonMapSchema>;
