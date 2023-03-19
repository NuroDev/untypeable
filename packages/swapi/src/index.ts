import { initUntypeable } from "untypeable";

import type { Film, FilmParams, Films } from "./films.types";
import type { People, Person, PersonParams } from "./people.types";
import type { Root } from "./root.types";

const u = initUntypeable();

const router = u.router({
  "/": u.output<Root>(),
  /** Get all the film resources */
  "/films": u.output<Films>(),
  /** Get a specific film resource */
  "/films/:id": u.input<FilmParams>().output<Film>(),
  /** Get all the people resources */
  "/people": u.output<People>(),
  /** Get a specific people resource */
  "/people/:id": u.input<PersonParams>().output<Person>(),
});

export type SwapiRouter = typeof router;
