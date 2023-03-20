import { z } from "zod";

/**
 * @docs https://swapi.dev/documentation#root
 */
export const RootSchema = z.object({
  /** The URL root for Film resources */
  films: z.literal("https://swapi.dev/api/films/"),
  /** The URL root for People resources */
  people: z.literal("https://swapi.dev/api/people/"),
  /** The URL root for Planet resources */
  planets: z.literal("https://swapi.dev/api/planets/"),
  /** The URL root for Species resources */
  species: z.literal("https://swapi.dev/api/species/"),
  /** The URL root for Starships resources */
  starships: z.literal("https://swapi.dev/api/starships/"),
  /** The URL root for Vehicles resources */
  vehicles: z.literal("https://swapi.dev/api/vehicles/"),
});
