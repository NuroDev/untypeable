import type { z } from "zod";

import type {
  CrewMemberParamsSchema,
  CrewMemberSchema,
  CrewSchema,
} from "./crew.validators";

export type CrewMember = z.infer<typeof CrewMemberSchema>;

export type Crew = z.infer<typeof CrewSchema>;

export type CrewMemberParams = z.infer<typeof CrewMemberParamsSchema>;
