import type { z } from "zod";

import type { SharedParamsSchema } from "./_shared.validators";

export type SharedParams = z.infer<typeof SharedParamsSchema>;
