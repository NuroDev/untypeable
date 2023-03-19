import { z } from "zod";

import { defineSWAPIPaginatedSchema } from "./_shared.validators";

/**
 * @docs https://swapi.dev/documentation#starships
 */
export const StarshipSchema = z.object({
  /**
   * The maximum number of kilograms that this starship can transport
   */
  cargo_capacity: z.string(),
  /**
   * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply
   */
  consumables: z.string(),
  /**
   * The cost of this starship new, in galactic credits
   */
  cost_in_credits: z.string(),
  /**
   * the ISO 8601 date format of the time that this resource was created
   */
  created: z.string().datetime(),
  /**
   * The number of personnel needed to run or pilot this starship
   */
  crew: z.string(),
  /**
   * the ISO 8601 date format of the time that this resource was edited
   */
  edited: z.string().datetime(),
  /**
   * An array of Film URL Resources that this starship has appeared in
   */
  films: z.array(z.string().url()),
  /**
   * The class of this starships hyperdrive
   */
  hyperdrive_rating: z.string(),
  /**
   * The length of this starship in meters
   */
  length: z.string(),
  /**
   * The manufacturer of this starship. Comma separated if more than one
   */
  manufacturer: z.string(),
  /**
   * The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight
   */
  max_atmosphering_speed: z.string(),
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth
   */
  MGLT: z.string(),
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station"
   */
  model: z.string(),
  /**
   * The name of this starship. The common name, such as "Death Star"
   */
  name: z.string(),
  /**
   * The number of non-essential people this starship can transport
   */
  passengers: z.string(),
  /**
   * An array of People URL Resources that this starship has been piloted by
   */
  pilots: z.array(z.string().url()),
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
   */
  starship_class: z.string(),
  /**
   * the hypermedia URL of this resource
   */
  url: z.string().url(),
});

/**
 * @docs https://swapi.dev/documentation#starships
 */
export const StarshipsSchema = defineSWAPIPaginatedSchema(StarshipSchema);

export const StarshipParamsSchema = z.object({
  id: z.number(),
});
