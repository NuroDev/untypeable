import { z } from "zod";

export const ShipSchema = z.object({
  abs: z.number().nullable().default(null),
  active: z.boolean(),
  class: z.number().nullable().default(null),
  course_deg: z.number().nullable().default(null),
  home_port: z.string(),
  id: z.string(),
  image: z.string().url().nullable().default(null),
  imo: z.number().nullable().default(null),
  last_ais_update: z.string().nullable().default(null),
  latitude: z.number().nullable().default(null),
  launches: z.array(z.string()),
  legacy_id: z.string().nullable().default(null),
  link: z.string().url().nullable().default(null),
  longitude: z.number().nullable().default(null),
  mass_kg: z.number().nullable().default(null),
  mass_lbs: z.number().nullable().default(null),
  mmsi: z.number().nullable().default(null),
  model: z.string().nullable().default(null),
  name: z.string(),
  roles: z.array(z.string()),
  speed_kn: z.number().nullable().default(null),
  status: z.string().nullable().default(null),
  type: z.string(),
  year_built: z.number().nullable().default(null),
});

export const ShipsSchema = z.array(ShipSchema);

export const ShipParamsSchema = z.object({
  id: z.string(),
});
