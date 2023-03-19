import { describe, it, expect } from "vitest";

import { PaginatedPersonSchema, PersonSchema } from "./zod";
import { useTestClient } from "./_shared/_shared.util";

describe.concurrent("SWAPI - People", () => {
  const client = useTestClient();

  it("GET - /people", async () => {
    const people = await client("/people");

    expect(people).toBeDefined();
    expect(people.count).toBeTypeOf("number");
    expect(people.next).toBeTypeOf("string");
    expect(people.next).not.toBe(null);
    expect(people.previous).toBe(null);
    expect(Array.isArray(people.results)).toBe(true);
    expect(people.results.length).toBeGreaterThan(0);
    expect(people.results.at(0)).toBeDefined();

    expect(PaginatedPersonSchema.safeParse(people).success).toBe(true);
  });

  it("GET - /people/:id", async () => {
    const person = await client("/people/:id", {
      id: 1,
    });

    expect(person).toBeDefined();
    expect(person).toMatchSnapshot({
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    });

    expect(PersonSchema.safeParse(person).success).toBe(true);
  });
});
