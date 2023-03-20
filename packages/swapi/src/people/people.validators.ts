import { z } from "zod";
import { defineSWAPIPaginatedSchema } from "../_shared.validators";

/**
 * @docs https://swapi.dev/documentation#people
 */
export const PersonSchema = z.object({
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin.
   *
   * The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birth_year: z.string(),
  /**
   * The ISO 8601 date format of the time that this resource was created
   */
  created: z.string().datetime(),
  /**
   * The ISO 8601 date format of the time that this resource was edited
   */
  edited: z.string().datetime(),
  /**
   * The eye color of this person.
   *
   * Will be "unknown" if not known or "n/a" if the person does not have an eye.
   */
  eye_color: z.string().or(z.enum(["unknown", "n/a"])),
  /**
   * An array of film resource URLs that this person has been in
   */
  films: z.array(z.string().url()),
  /**
   * The gender of this person.
   *
   * Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
   */
  gender: z.enum(["male", "female", "unknown", "n/a"]),
  /**
   * The hair color of this person.
   *
   * Will be "unknown" if not known or "n/a" if the person does not have hair.
   */
  hair_color: z.string().or(z.enum(["unknown", "n/a"])),
  /**
   * The height of the person in centimeters
   */
  height: z.string().transform(Number),
  /**
   * The URL of a planet resource, a planet that this person was born on or inhabits
   */
  homeworld: z.string().url(),
  /**
   * The mass of the person in kilograms
   */
  mass: z.string().transform(Number),
  /**
   * The name of this person
   */
  name: z.string(),
  /**
   * The skin color of this person
   */
  skin_color: z.string(),
  /**
   * An array of species resource URLs that this person belongs to
   */
  species: z.array(z.string().url()),
  /**
   * An array of starship resource URLs that this person has piloted
   */
  starships: z.array(z.string().url()),
  /**
   * An array of vehicle resource URLs that this person has piloted
   */
  vehicles: z.array(z.string().url()),
  /**
   * The hypermedia URL of this resource
   */
  url: z.string().url(),
});

/**
 * @docs https://swapi.dev/documentation#people
 */
export const PeopleSchema = defineSWAPIPaginatedSchema(PersonSchema);

export const PersonParamsSchema = z.object({
  id: z.number(),
});
