import { z } from "zod";

import { defineSWAPIPaginatedSchema } from "../_shared.validators";

/**
 * @docs https://swapi.dev/documentation#planets
 */
export const PlanetSchema = z.object({
  /**
   * The climate of this planet. Comma separated if diverse
   */
  climate: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was created
   */
  created: z.string().datetime(),
  /**
   * The diameter of this planet in kilometers
   */
  diameter: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was edited
   */
  edited: z.string().datetime(),
  /**
   * An array of Film URL Resources that this planet has appeared in
   */
  films: z.array(z.string().url()),
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs
   */
  gravity: z.string(),
  /**
   * The name of this planet
   */
  name: z.string(),
  /**
   * The number of standard days it takes for this planet to complete a single orbit of its local star
   */
  orbital_period: z.string(),
  /**
   * The average population of sentient beings inhabiting this planet
   */
  population: z.string(),
  /**
   * An array of People URL Resources that live on this planet
   */
  residents: z.array(z.string().url()),
  /**
   * The number of standard hours it takes for this planet to complete a single rotation on its axis
   */
  rotation_period: z.string(),
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies of water
   */
  surface_water: z.string(),
  /**
   * The terrain of this planet. Comma separated if diverse
   */
  terrain: z.string(),
  /**
   * The hypermedia URL of this resource
   */
  url: z.string().url(),
});

/**
 * @docs https://swapi.dev/documentation#planets
 */
export const PlanetsSchema = defineSWAPIPaginatedSchema(PlanetSchema);

export const PlanetParamsSchema = z.object({
  id: z.number(),
});
