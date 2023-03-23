import type { z } from "zod";

import type {
  SpaceTrackSchema,
  StarlinkSatelliteParamsSchema,
  StarlinkSatelliteSchema,
  StarlinkSatellitesSchema,
} from "./starlink.validators";

export type SpaceTrack = z.infer<typeof SpaceTrackSchema>;

export type StarlinkSatelliteParams = z.infer<
  typeof StarlinkSatelliteParamsSchema
>;

export type StarlinkSatellite = z.infer<typeof StarlinkSatelliteSchema>;

export type StarlinkSatellites = z.infer<typeof StarlinkSatellitesSchema>;
