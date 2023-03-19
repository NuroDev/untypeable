import type { z } from "zod";

import type {
  PlanetParamsSchema,
  PlanetSchema,
  PlanetsSchema,
} from "./planets.validators";

/**
 * @docs https://swapi.dev/documentation#planets
 */
export type Planet = z.infer<typeof PlanetSchema>;

/**
 * @docs https://swapi.dev/documentation#planets
 */
export type Planets = z.infer<typeof PlanetsSchema>;

export type PlanetParams = z.infer<typeof PlanetParamsSchema>;
