import { z } from "zod";

export const CoreSchema = z.object({
  core: z.string().nullable().default(null),
  flight: z.number().nullable().default(null),
  gridfins: z.boolean().nullable().default(null),
  landing_attempt: z.boolean().nullable().default(null),
  landing_success: z.boolean().nullable().default(null),
  landing_type: z.string().nullable().default(null),
  landpad: z.string().nullable().default(null),
  legs: z.boolean().nullable().default(null),
  reused: z.boolean().nullable().default(null),
});

const SharedLaunchSchema = z.object({
  auto_update: z.boolean(),
  capsules: z.array(z.string()),
  cores: z.array(CoreSchema),
  date_local: z.string(),
  date_precision: z.enum(["half", "quarter", "year", "month", "day", "hour"]),
  date_unix: z.number(),
  date_utc: z.string().datetime(),
  details: z.string().nullable().default(null),
  failures: z.array(
    z.object({
      altitude: z.number().nullable().default(null),
      reason: z.string(),
      time: z.number(),
    })
  ),
  fairings: z
    .object({
      recovered: z.boolean().nullable().default(null),
      recovery_attempt: z.boolean().nullable().default(null),
      reused: z.boolean().nullable().default(null),
      ships: z.array(z.string()),
    })
    .nullable()
    .default(null),
  flight_number: z.number(),
  id: z.string(),
  launch_library_id: z.string().nullable().default(null),
  launchpad: z.string().nullable().default(null),
  links: z.object({
    article: z.string().url().nullable().default(null),
    flickr: z.object({
      original: z.array(z.string().url().nullable().default(null)),
      small: z.array(z.string().url().nullable().default(null)),
    }),
    patch: z.object({
      large: z.string().url().nullable().default(null),
      small: z.string().url().nullable().default(null),
    }),
    presskit: z.string().url().nullable().default(null),
    reddit: z.object({
      campaign: z.string().url().nullable().default(null),
      launch: z.string().url().nullable().default(null),
      media: z.string().url().nullable().default(null),
      recovery: z.string().url().nullable().default(null),
    }),
    webcast: z.string().url().nullable().default(null),
    wikipedia: z.string().url().nullable().default(null),
    youtube_id: z.string().nullable().default(null),
  }),
  name: z.string(),
  net: z.boolean().default(false),
  payloads: z.array(z.string()),
  rocket: z.string().nullable().default(null),
  ships: z.array(z.string()),
  static_fire_date_unix: z.number().nullable().default(null),
  static_fire_date_utc: z.string().datetime().nullable().default(null),
  success: z.boolean().nullable().default(null),
  tbd: z.unknown(),
  upcoming: z.boolean(),
  window: z.number().nullable().default(null),
});

export const LaunchV4Schema = SharedLaunchSchema.extend({
  crew: z.array(z.string()),
});

export const LaunchV5Schema = SharedLaunchSchema.extend({
  crew: z.array(
    z.object({
      crew: z.string(),
      role: z.string(),
    })
  ),
});

export const LaunchesV4Schema = z.array(LaunchV4Schema);

export const LaunchesV5Schema = z.array(LaunchV5Schema);

export const LaunchParamsSchema = z.object({
  id: z.string(),
});
