import type { z } from "zod";

import type { InsightSchema } from "./insight.validators";

export type Insight = z.infer<typeof InsightSchema>;
