import type { z } from "zod";

import type { NanoIDSchema, NanoIdParamsSchema } from "./nanoid.validators";

export type NanoIDParams = z.infer<typeof NanoIdParamsSchema>;
export type NanoID = z.infer<typeof NanoIDSchema>;
