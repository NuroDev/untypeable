import { z } from "zod";

export const LaunchPadSchema = z.object({
  details: z.string(),
  full_name: z.string().nullable().default(null),
  id: z.string(),
  images: z.object({
    large: z.array(z.string().url()),
  }),
  latitude: z.number().nullable().default(null),
  launch_attempts: z.number().default(0),
  launch_successes: z.number().default(0),
  launches: z.array(z.string()),
  locality: z.string().nullable().default(null),
  longitude: z.number().nullable().default(null),
  name: z.string().nullable().default(null),
  region: z.string().nullable().default(null),
  rockets: z.array(z.string()),
  status: z.enum([
    "active",
    "inactive",
    "lost",
    "retired",
    "under construction",
    "unknown",
  ]),
  timezone: z.string().nullable().default(null),
});

export const LaunchPadsSchema = z.array(LaunchPadSchema);

export const LaunchPadParamsSchema = z.object({
  id: z.string(),
});
