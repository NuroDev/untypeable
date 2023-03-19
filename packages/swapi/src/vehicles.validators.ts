import { z } from "zod";

import { defineSWAPIPaginatedSchema } from "./_shared/_shared.validators";

/**
 * @docs https://swapi.dev/documentation#vehicles
 */
export const VehicleSchema = z.object({
  /**
   * The maximum number of kilograms that this vehicle can transport
   */
  cargo_capacity: z.string(),
  /**
   * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply
   */
  consumables: z.string(),
  /**
   * The cost of this vehicle new, in Galactic Credits
   */
  cost_in_credits: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was created
   */
  created: z.string(),
  /**
   * The number of personnel needed to run or pilot this vehicle
   */
  crew: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was edited
   */
  edited: z.string(),
  /**
   * An array of Film URL Resources that this vehicle has appeared in
   */
  films: z.array(z.string().url()),
  /**
   * The length of this vehicle in meters
   */
  length: z.string(),
  /**
   * The manufacturer of this vehicle. Comma separated if more than one
   */
  manufacturer: z.string(),
  /**
   * The maximum speed of this vehicle in the atmosphere
   */
  max_atmosphering_speed: z.string(),
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack Transport"
   */
  model: z.string(),
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike"
   */
  name: z.string(),
  /**
   * The number of non-essential people this vehicle can transport
   */
  passengers: z.string(),
  /**
   * An array of People URL Resources that this vehicle has been piloted by
   */
  pilots: z.array(z.string().url()),
  /**
   * The hypermedia URL of this resource
   */
  url: z.string().url(),
  /**
   * The class of this vehicle, such as "Wheeled" or "Repulsorcraft"
   */
  vehicle_class: z.string(),
});

/**
 * @docs https://swapi.dev/documentation#vehicles
 */
export const VehiclesSchema = defineSWAPIPaginatedSchema(VehicleSchema);

export const VehicleParamsSchema = z.object({
  id: z.number(),
});
