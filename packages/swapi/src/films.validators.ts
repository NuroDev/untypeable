import { z } from "zod";
import { defineSWAPIPaginatedSchema } from "./_shared/_shared.validators";

/**
 * @docs https://swapi.dev/documentation#films
 */
export const FilmSchema = z.object({
  /**
   * An array of people resource URLs that are in this film
   */
  characters: z.array(z.string().url()),
  /**
   * The ISO 8601 date format of the time that this resource was created */
  created: z.string().datetime(),
  /**
   * The name of the director of this film */
  director: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was edited */
  edited: z.string().datetime(),
  /**
   * The episode number of this film */
  episode_id: z.number(),
  /**
   * The opening paragraphs at the beginning of this film */
  opening_crawl: z.string(),
  /**
   * An array of planet resource URLs that are in this film */
  planets: z.array(z.string().url()),
  /**
   * The name(s) of the producer(s) of this film. Comma separated */
  producer: z.string(),
  /**
   * The ISO 8601 date format of film release at original creator country */
  release_date: z.string(),
  /**
   * An array of species resource URLs that are in this film */
  species: z.array(z.string().url()),
  /**
   * An array of starship resource URLs that are in this film */
  starships: z.array(z.string().url()),
  /**
   * The title of this film */
  title: z.string(),
  /**
   * The hypermedia URL of this resource */
  url: z.string().url(),
  /**
   * An array of vehicle resource URLs that are in this film */
  vehicles: z.array(z.string().url()),
});

/**
 * @docs https://swapi.dev/documentation#films
 */
export const FilmsSchema = defineSWAPIPaginatedSchema(FilmSchema);

export const FilmParamsSchema = z.object({
  id: z.number(),
});
