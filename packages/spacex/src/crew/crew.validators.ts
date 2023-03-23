import { z } from "zod";

export const CrewMemberSchema = z.object({
  agency: z.string().nullable().default(null),
  id: z.string(),
  image: z.string().url().nullable().default(null),
  launches: z.array(z.string()),
  name: z.string().nullable().default(null),
  status: z.enum(["active", "inactive", "retired", "unknown"]),
  wikipedia: z.string().url().nullable().default(null),
});

export const CrewSchema = z.array(CrewMemberSchema);

export const CrewMemberParamsSchema = z.object({
  id: z.string(),
});
