import { z } from "zod";

export const DiameterSchema = z.object({
  meters: z.number().nullable().default(null),
  feet: z.number().nullable().default(null),
});

export const MassSchema = z.object({
  kg: z.number(),
  lb: z.number(),
});

export const ThrustSchema = z.object({
  kN: z.number(),
  lbf: z.number(),
});
