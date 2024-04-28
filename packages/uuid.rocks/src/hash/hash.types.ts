import type { z } from "zod";

import type { HashParamsSchema, HashSchema } from "./hash.validators";

export type HashParams = z.infer<typeof HashParamsSchema>;

export type Hash = z.infer<typeof HashSchema>;
