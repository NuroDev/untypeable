import type { z } from "zod";

import type {
  EngineSchema,
  RocketParamsSchema,
  RocketSchema,
  RocketsSchema,
} from "./rockets.validators";

export type Engine = z.infer<typeof EngineSchema>;

export type Rocket = z.infer<typeof RocketSchema>;

export type Rockets = z.infer<typeof RocketsSchema>;

export type RocketParams = z.infer<typeof RocketParamsSchema>;
