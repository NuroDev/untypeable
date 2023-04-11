import type { z } from "zod";

import type { SharedOptionsSchema } from "./_shared.validators";

export type SharedOptions = z.infer<typeof SharedOptionsSchema>;
