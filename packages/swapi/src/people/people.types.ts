import type { z } from "zod";

import type {
  PeopleSchema,
  PersonParamsSchema,
  PersonSchema,
} from "./people.validators";

/**
 * @docs https://swapi.dev/documentation#people
 */
export type Person = z.infer<typeof PersonSchema>;

/**
 * @docs https://swapi.dev/documentation#people
 */
export type People = z.infer<typeof PeopleSchema>;

export type PersonParams = z.infer<typeof PersonParamsSchema>;
