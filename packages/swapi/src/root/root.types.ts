import type { z } from "zod";

import type { RootSchema } from "./root.validators";

/**
 * @docs https://swapi.dev/documentation#root
 */
export type Root = z.infer<typeof RootSchema>;
