import type { z } from "zod";

import type {
  VehicleParamsSchema,
  VehicleSchema,
  VehiclesSchema,
} from "./vehicles.validators";

/**
 * @docs https://swapi.dev/documentation#vehicles
 */
export type Vehicle = z.infer<typeof VehicleSchema>;

/**
 * @docs https://swapi.dev/documentation#vehicles
 */
export type Vehicles = z.infer<typeof VehiclesSchema>;

export type VehicleParams = z.infer<typeof VehicleParamsSchema>;
