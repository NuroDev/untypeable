import { z } from "zod";

export const CoreSchema = z.object({
  asds_attempts: z.number().default(0),
  asds_landings: z.number().default(0),
  block: z.number().nullable().default(null),
  id: z.string(),
  last_update: z.string().nullable().default(null),
  launches: z.array(z.string()),
  reuse_count: z.number().default(0),
  rtls_attempts: z.number().default(0),
  rtls_landings: z.number().default(0),
  serial: z.string(),
  status: z.enum([
    "active",
    "inactive",
    "unknown",
    "expended",
    "lost",
    "retired",
  ]),
});

export const CoresSchema = z.array(CoreSchema);

export const CoreParamsSchema = z.object({
  id: z.string(),
});
