import { describe, it, expect } from "vitest";

import { PlanetSchema, PlanetsSchema } from "../src/zod";
import { useTestClient } from "../src/_shared/_shared.util";

describe.concurrent("SWAPI - Planets", () => {
  const client = useTestClient();

  it("GET - /planets", async () => {
    const planets = await client("/planets");

    expect(planets).toBeDefined();
    expect(planets.count).toBeDefined();
    expect(planets.next).toBeDefined();
    expect(planets.previous).toBeDefined();
    expect(Array.isArray(planets.results)).toBe(true);
    expect(planets.results.length).toBeGreaterThan(0);
    expect(planets.results.at(0)).toBeDefined();

    expect(PlanetsSchema.safeParse(planets).success).toBe(true);
  });

  it("GET - /planets/:id", async () => {
    const planet = await client("/planets/:id", {
      id: 1,
    });

    expect(planet).toBeDefined();
    expect(planet).toMatchSnapshot({
      climate: "arid",
      created: "2014-12-09T13:50:49.641000Z",
      diameter: "10465",
      edited: "2014-12-20T20:58:18.411000Z",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      gravity: "1 standard",
      name: "Tatooine",
      orbital_period: "304",
      population: "200000",
      residents: [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/",
      ],
      rotation_period: "23",
      surface_water: "1",
      terrain: "desert",
      url: "https://swapi.dev/api/planets/1/",
    });

    expect(PlanetSchema.safeParse(planet).success).toBe(true);
  });
});
