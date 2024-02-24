import { initUntypeable } from "untypeable";

import {
  FilmSchema,
  FilmParamsSchema,
  FilmsSchema,
} from "./films/films.validators";
import {
  PeopleSchema,
  PersonSchema,
  PersonParamsSchema,
} from "./people/people.validators";
import {
  PlanetSchema,
  PlanetParamsSchema,
  PlanetsSchema,
} from "./planets/planets.validators";
import { RootSchema } from "./root/root.validators";
import {
  AllSpeciesSchema,
  SpeciesSchema,
  SpeciesParamsSchema,
} from "./species/species.validators";
import {
  StarshipSchema,
  StarshipParamsSchema,
  StarshipsSchema,
} from "./starships/starships.validators";
import {
  VehicleSchema,
  VehicleParamsSchema,
  VehiclesSchema,
} from "./vehicles/vehicles.validators";

const u = initUntypeable();

const router = u.router({
  "/": u.output(RootSchema),
  /** Get all the film resources */
  "/films": u.output(FilmsSchema),
  /** Get a specific film resource */
  "/films/:id": u.input(FilmParamsSchema).output(FilmSchema),
  /** Get all the people resources */
  "/people": u.output(PeopleSchema),
  /** Get a specific people resource */
  "/people/:id": u.input(PersonParamsSchema).output(PersonSchema),
  /** Get all the planets resources */
  "/planets": u.output(PlanetsSchema),
  /** Get a specific planets resource */
  "/planets/:id": u.input(PlanetParamsSchema).output(PlanetSchema),
  /** Get all the species resources */
  "/species": u.output(AllSpeciesSchema),
  /** Get a specific species resource */
  "/species/:id": u.input(SpeciesParamsSchema).output(SpeciesSchema),
  /** Get all the starship resources */
  "/starships": u.output(StarshipsSchema),
  /** Get a specific starship resource */
  "/starships/:id": u.input(StarshipParamsSchema).output(StarshipSchema),
  /** Get all the vehicle resources */
  "/vehicles": u.output(VehiclesSchema),
  /** Get a specific vehicle resource */
  "/vehicles/:id": u.input(VehicleParamsSchema).output(VehicleSchema),
});

export type SwapiRouter = typeof router;
