import type { z } from "zod";

import type {
  FilmParamsSchema,
  FilmSchema,
  FilmsSchema,
} from "./films.validators";

/**
 * @docs https://swapi.dev/documentation#films
 */
export type Film = z.infer<typeof FilmSchema>;

/**
 * @docs https://swapi.dev/documentation#films
 */
export type Films = z.infer<typeof FilmsSchema>;

export type FilmParams = z.infer<typeof FilmParamsSchema>;
