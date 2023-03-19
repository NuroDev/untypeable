import { describe, it, expect } from "vitest";

import { RootSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Root", () => {
  const client = useTestClient();

  it("GET - /", async () => {
    const root = await client("/");

    expect(root).toBeDefined();
    expect(root).toMatchSnapshot({
      films: "https://swapi.dev/api/films/",
      people: "https://swapi.dev/api/people/",
      planets: "https://swapi.dev/api/planets/",
      species: "https://swapi.dev/api/species/",
      starships: "https://swapi.dev/api/starships/",
      vehicles: "https://swapi.dev/api/vehicles/",
    });

    expect(RootSchema.safeParse(root).success).toBe(true);
  });
});
