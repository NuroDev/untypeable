import type { z } from "zod";

import type { StatsSchema } from "./stats.validators";

export type Stats = z.infer<typeof StatsSchema>;
