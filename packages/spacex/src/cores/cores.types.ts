import type { z } from "zod";

import type {
  CoreParamsSchema,
  CoreSchema,
  CoresSchema,
} from "./cores.validators";

export type Core = z.infer<typeof CoreSchema>;

export type Cores = z.infer<typeof CoresSchema>;

export type CoreParams = z.infer<typeof CoreParamsSchema>;
