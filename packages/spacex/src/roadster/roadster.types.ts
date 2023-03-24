import type { z } from "zod";

import type { RoadsterSchema } from "./roadster.validators";

export type Roadster = z.infer<typeof RoadsterSchema>;
