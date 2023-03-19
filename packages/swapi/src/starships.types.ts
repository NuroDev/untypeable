import type { z } from "zod";

import type {
  StarshipParamsSchema,
  StarshipSchema,
  StarshipsSchema,
} from "./starships.validators";

/**
 * @docs https://swapi.dev/documentation#starships
 */
export type Starship = z.infer<typeof StarshipSchema>;

/**
 * @docs https://swapi.dev/documentation#starships
 */
export type Starships = z.infer<typeof StarshipsSchema>;

export type StarshipParams = z.infer<typeof StarshipParamsSchema>;
