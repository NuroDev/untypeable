import type { z } from "zod";

import type {
  DiameterSchema,
  MassSchema,
  ThrustSchema,
} from "./_shared.validators";

export type Diameter = z.infer<typeof DiameterSchema>;

export type Mass = z.infer<typeof MassSchema>;

export type Thrust = z.infer<typeof ThrustSchema>;
