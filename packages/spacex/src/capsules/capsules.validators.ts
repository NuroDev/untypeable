import { z } from "zod";

export const CapsuleSchema = z.object({
  id: z.string(),
  land_landings: z.number().default(0),
  last_update: z.string().nullable().default(null),
  launches: z.array(z.string()),
  reuse_count: z.number().default(0),
  serial: z.string(),
  status: z.enum(["unknown", "active", "retired", "destroyed"]),
  type: z.enum(["Dragon 1.0", "Dragon 1.1", "Dragon 2.0"]),
  water_landings: z.number().default(0),
});

export const CapsulesSchema = z.array(CapsuleSchema);

export const CapsuleParamsSchema = z.object({
  id: z.string(),
});
