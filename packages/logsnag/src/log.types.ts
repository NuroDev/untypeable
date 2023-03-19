import type { z } from "zod";

import type { LogSchema } from "./log.validators";

export type Log = z.infer<typeof LogSchema>;
