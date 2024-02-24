import type { z } from "zod";

import type {
  PlainBulkParamsSchema,
  PlainBulkSchema,
  PlainMapParamsSchema,
  PlainMapSchema,
  PlainNamespaceMapParamsSchema,
  PlainNamespaceMapSchema,
  PlainParamsSchema,
  PlainSchema,
} from "./plain.validators";

export type PlainParams = z.infer<typeof PlainParamsSchema>;
export type Plain = z.infer<typeof PlainSchema>;

export type PlainBulkParams = z.infer<typeof PlainBulkParamsSchema>;
export type PlainBulk = z.infer<typeof PlainBulkSchema>;

export type PlainMapParams = z.infer<typeof PlainMapParamsSchema>;
export type PlainMap = z.infer<typeof PlainMapSchema>;

export type PlainNamespaceMapParams = z.infer<
  typeof PlainNamespaceMapParamsSchema
>;
export type PlainNamespaceMap = z.infer<typeof PlainNamespaceMapSchema>;
