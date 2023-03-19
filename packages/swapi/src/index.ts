import { initUntypeable } from "untypeable";

import type { PaginatedPerson, Person, PersonParams } from "./people.types";
import type { Root } from "./root.types";

const u = initUntypeable();

const router = u.router({
  "/": u.output<Root>(),
  /** Get all the people resources */
  "/people": u.output<PaginatedPerson>(),
  /** Get a specific people resource */
  "/people/:id": u.input<PersonParams>().output<Person>(),
});

export type SwapiRouter = typeof router;