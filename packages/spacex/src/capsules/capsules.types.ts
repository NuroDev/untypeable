import type { z } from "zod";

import type {
  CapsuleParamsSchema,
  CapsuleSchema,
  CapsulesSchema,
} from "./capsules.validators";

export type Capsule = z.infer<typeof CapsuleSchema>;

export type Capsules = z.infer<typeof CapsulesSchema>;

export type CapsuleParams = z.infer<typeof CapsuleParamsSchema>;
