import { describe, it } from "vitest";

import { PlanetSchema, PlanetsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Planets", () => {
  const client = useTestClient();

  it("GET - /planets", async ({ expect }) => {
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

  it("GET - /planets/:id", async ({ expect }) => {
    const planet = await client("/planets/:id", {
      id: 1,
    });

    expect(planet).toBeDefined();
    expect(planet).toMatchSnapshot();

    expect(PlanetSchema.safeParse(planet).success).toBe(true);
  });
});
