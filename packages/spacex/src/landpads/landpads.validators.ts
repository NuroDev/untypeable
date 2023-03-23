import { z } from "zod";

export const LandPadSchema = z.object({
  details: z.string().nullable().default(null),
  full_name: z.string().nullable().default(null),
  id: z.string(),
  landing_attempts: z.number().nullable().default(0),
  landing_successes: z.number().nullable().default(0),
  latitude: z.number().nullable().default(null),
  launches: z.array(z.string()),
  locality: z.string().nullable().default(null),
  longitude: z.number().nullable().default(null),
  name: z.string().nullable().default(null),
  region: z.string().nullable().default(null),
  status: z.enum([
    "active",
    "inactive",
    "lost",
    "retired",
    "under construction",
    "unknown",
  ]),
  type: z.string().nullable().default(null),
  wikipedia: z.string().url().nullable().default(null),
});

export const LandPadsSchema = z.array(LandPadSchema);

export const LandPadParamsSchema = z.object({
  id: z.string(),
});
