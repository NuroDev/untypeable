import type { z } from "zod";

import type {
  CoreSchema,
  LaunchesV4Schema,
  LaunchesV5Schema,
  LaunchParamsSchema,
  LaunchV4Schema,
  LaunchV5Schema,
} from "./launches.validators";

export type Core = z.infer<typeof CoreSchema>;

export type LaunchV4 = z.infer<typeof LaunchV4Schema>;

export type LaunchV5 = z.infer<typeof LaunchV5Schema>;

export type LaunchesV4 = z.infer<typeof LaunchesV4Schema>;

export type LaunchesV5 = z.infer<typeof LaunchesV5Schema>;

export type LaunchParams = z.infer<typeof LaunchParamsSchema>;
