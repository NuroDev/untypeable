import type { z } from "zod";

import type {
  AllSpeciesSchema,
  SpeciesParamsSchema,
  SpeciesSchema,
} from "./species.validators";

/**
 * @docs https://swapi.dev/documentation#species
 */
export type AllSpecies = z.infer<typeof AllSpeciesSchema>;

/**
 * @docs https://swapi.dev/documentation#species
 */
export type Species = z.infer<typeof SpeciesSchema>;

export type SpeciesParams = z.infer<typeof SpeciesParamsSchema>;
