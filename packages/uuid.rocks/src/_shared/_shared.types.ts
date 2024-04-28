import type { z } from "zod";

import type { GlobalParamsSchema } from "./_shared.validators";

export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type GlobalParams = z.infer<typeof GlobalParamsSchema>;
