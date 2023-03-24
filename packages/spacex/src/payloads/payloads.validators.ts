import { z } from "zod";

export const PayloadSchema = z.object({
  apoapsis_km: z.number().nullable().default(null),
  arg_of_pericenter: z.number().nullable().default(null),
  customers: z.array(z.string()),
  dragon: z.object({
    capsule: z.string().nullable().default(null),
    flight_time_sec: z.number().nullable().default(null),
    land_landing: z.boolean().nullable().default(null),
    manifest: z.string().nullable().default(null),
    mass_returned_kg: z.number().nullable().default(null),
    mass_returned_lbs: z.number().nullable().default(null),
    water_landing: z.boolean().nullable().default(null),
  }),
  eccentricity: z.number().nullable().default(null),
  epoch: z.string().nullable().default(null),
  id: z.string(),
  inclination_deg: z.number().nullable().default(null),
  launch: z.string().nullable().default(null),
  lifespan_years: z.number().nullable().default(null),
  longitude: z.number().nullable().default(null),
  manufacturers: z.array(z.string()),
  mass_kg: z.number().nullable().default(null),
  mass_lbs: z.number().nullable().default(null),
  mean_anomaly: z.number().nullable().default(null),
  mean_motion: z.number().nullable().default(null),
  name: z.string().nullable().default(null),
  nationalities: z.array(z.string()),
  norad_ids: z.array(z.number()),
  orbit: z.string().nullable().default(null),
  periapsis_km: z.number().nullable().default(null),
  period_min: z.number().nullable().default(null),
  raan: z.number().nullable().default(null),
  reference_system: z.string().nullable().default(null),
  regime: z.string().nullable().default(null),
  reused: z.boolean().default(false),
  semi_major_axis_km: z.number().nullable().default(null),
  type: z.string().nullable().default(null),
});

export const PayloadsSchema = z.array(PayloadSchema);

export const PayloadParamsSchema = z.object({
  id: z.string(),
});
