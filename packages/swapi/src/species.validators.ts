import { z } from "zod";

import { defineSWAPIPaginatedSchema } from "./_shared.validators";

/**
 * @docs https://swapi.dev/documentation#species
 */
export const SpeciesSchema = z.object({
  /**
   * The average height of this species in centimeters
   */
  average_height: z.string(),
  /**
   * The average lifespan of this species in years
   */
  average_lifespan: z.string(),
  /**
   * The classification of this species, such as "mammal" or "reptile"
   */
  classification: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was created
   */
  created: z.string().datetime(),
  /**
   * The designation of this species, such as "sentient"
   */
  designation: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was edited
   */
  edited: z.string().datetime(),
  /**
   * A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes
   */
  eye_colors: z.string(),
  /**
   * An array of Film URL Resources that this species has appeared in
   */
  films: z.array(z.string().url()),
  /**
   * A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair
   */
  hair_colors: z.string(),
  /**
   * The URL of a planet resource, a planet that this species originates from
   */
  homeworld: z.string().url().nullable(),
  /**
   * The language commonly spoken by this species
   */
  language: z.string(),
  /**
   * The name of this species
   */
  name: z.string(),
  /**
   * An array of People URL Resources that are a part of this species
   */
  people: z.array(z.string().url()),
  /**
   * A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin
   */
  skin_colors: z.string(),
  /**
   * The hypermedia URL of this resource
   */
  url: z.string().url(),
});

/**
 * @docs https://swapi.dev/documentation#species
 */
export const AllSpeciesSchema = defineSWAPIPaginatedSchema(SpeciesSchema);

export const SpeciesParamsSchema = z.object({
  id: z.number(),
});
