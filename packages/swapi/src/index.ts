import { initUntypeable } from "untypeable";

import type { Film, FilmParams, Films } from "./films.types";
import type { People, Person, PersonParams } from "./people.types";
import type { Root } from "./root.types";
import type { AllSpecies, Species, SpeciesParams } from "./species.types";
import type { Starship, StarshipParams, Starships } from "./starships.types";
import type { Vehicle, VehicleParams, Vehicles } from "./vehicles.types";

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
  /** Get all the species resources */
  "/species": u.output<AllSpecies>(),
  /** Get a specific species resource */
  "/species/:id": u.input<SpeciesParams>().output<Species>(),
  /** Get all the starship resources */
  "/starships": u.output<Starships>(),
  /** Get a specific starship resource */
  "/starships/:id": u.input<StarshipParams>().output<Starship>(),
  /** Get all the vehicle resources */
  "/vehicles": u.output<Vehicles>(),
  /** Get a specific vehicle resource */
  "/vehicles/:id": u.input<VehicleParams>().output<Vehicle>(),
});

export type SwapiRouter = typeof router;
