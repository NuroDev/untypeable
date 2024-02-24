import type { z } from "zod";

import type { NanoIDSchema } from "./nanoid.validators";

export type NanoID = z.infer<typeof NanoIDSchema>;
