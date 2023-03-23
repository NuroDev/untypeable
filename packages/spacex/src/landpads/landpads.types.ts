import type { z } from "zod";

import type {
  LandPadParamsSchema,
  LandPadSchema,
  LandPadsSchema,
} from "./landpads.validators";

export type LandPad = z.infer<typeof LandPadSchema>;

export type LandPads = z.infer<typeof LandPadsSchema>;

export type LandPadParams = z.infer<typeof LandPadParamsSchema>;
