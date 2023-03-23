import { z } from "zod";

export const SpaceTrackSchema = z.object({
  APOAPSIS: z.number().nullable().default(null),
  ARG_OF_PERICENTER: z.number().nullable().default(null),
  BSTAR: z.number().nullable().default(null),
  CCSDS_OMM_VERS: z.string().nullable().default(null),
  CENTER_NAME: z.string().nullable().default(null),
  CLASSIFICATION_TYPE: z.string().nullable().default(null),
  COMMENT: z.string().nullable().default(null),
  COUNTRY_CODE: z.string().nullable().default(null),
  CREATION_DATE: z.string().nullable().default(null),
  DECAY_DATE: z.string().nullable().default(null),
  DECAYED: z.number().nullable().default(null),
  ECCENTRICITY: z.number().nullable().default(null),
  ELEMENT_SET_NO: z.number().nullable().default(null),
  EPHEMERIS_TYPE: z.number().nullable().default(null),
  EPOCH: z.string().nullable().default(null),
  FILE: z.number().nullable().default(null),
  GP_ID: z.number().nullable().default(null),
  INCLINATION: z.number().nullable().default(null),
  LAUNCH_DATE: z.string().nullable().default(null),
  MEAN_ANOMALY: z.number().nullable().default(null),
  MEAN_ELEMENT_THEORY: z.string().nullable().default(null),
  MEAN_MOTION_DDOT: z.number().nullable().default(null),
  MEAN_MOTION_DOT: z.number().nullable().default(null),
  MEAN_MOTION: z.number().nullable().default(null),
  NORAD_CAT_ID: z.number().nullable().default(null),
  OBJECT_ID: z.string().nullable().default(null),
  OBJECT_NAME: z.string().nullable().default(null),
  OBJECT_TYPE: z.string().nullable().default(null),
  ORIGINATOR: z.string().nullable().default(null),
  PERIAPSIS: z.number().nullable().default(null),
  PERIOD: z.number().nullable().default(null),
  RA_OF_ASC_NODE: z.number().nullable().default(null),
  RCS_SIZE: z.string().nullable().default(null),
  REF_FRAME: z.string().nullable().default(null),
  REV_AT_EPOCH: z.number().nullable().default(null),
  SEMIMAJOR_AXIS: z.number().nullable().default(null),
  SITE: z.string().nullable().default(null),
  TIME_SYSTEM: z.string().nullable().default(null),
  TLE_LINE0: z.string().nullable().default(null),
  TLE_LINE1: z.string().nullable().default(null),
  TLE_LINE2: z.string().nullable().default(null),
});

export const StarlinkSatelliteSchema = z.object({
  height_km: z.number().nullable().default(null),
  id: z.string(),
  latitude: z.number().nullable().default(null),
  launch: z.string().nullable(), // TODO: Add `.default(LaunchSchema)` once `LaunchSchema` is created
  longitude: z.number().nullable().default(null),
  spaceTrack: SpaceTrackSchema,
  velocity_kms: z.number().nullable().default(null),
  version: z
    .enum(["prototype", "v0.9", "v1.0", "v1.5"])
    .nullable()
    .default(null),
});

export const StarlinkSatellitesSchema = z.array(StarlinkSatelliteSchema);

export const StarlinkSatelliteParamsSchema = z.object({
  id: z.string(),
});
