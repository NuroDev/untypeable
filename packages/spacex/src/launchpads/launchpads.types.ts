import type { z } from "zod";

import type {
  LaunchPadSchema,
  LaunchPadsSchema,
  LaunchPadParamsSchema,
} from "./launchpads.validators";

export type LaunchPad = z.infer<typeof LaunchPadSchema>;

export type LaunchPads = z.infer<typeof LaunchPadsSchema>;

export type LaunchPadParams = z.infer<typeof LaunchPadParamsSchema>;
