import type { z } from "zod";

import type {
  DiameterSchema,
  DragonParamsSchema,
  DragonSchema,
  DragonsSchema,
  HeatShieldSchema,
  MassSchema,
  PressurizedCapsuleSchema,
  TrunkSchema,
  VolumeSchema,
} from "./dragons.validators";

export type HeatShield = z.infer<typeof HeatShieldSchema>;

export type Mass = z.infer<typeof MassSchema>;

export type Volume = z.infer<typeof VolumeSchema>;

export type PressurizedCapsule = z.infer<typeof PressurizedCapsuleSchema>;

export type Trunk = z.infer<typeof TrunkSchema>;

export type Diameter = z.infer<typeof DiameterSchema>;

export type Dragon = z.infer<typeof DragonSchema>;

export type Dragons = z.infer<typeof DragonsSchema>;

export type DragonParams = z.infer<typeof DragonParamsSchema>;
