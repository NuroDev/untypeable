import { describe, it, expect } from "vitest";

import { AllSpeciesSchema, SpeciesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Species", () => {
  const client = useTestClient();

  it("GET - /species", async () => {
    const allSpecies = await client("/species");

    expect(allSpecies).toBeDefined();
    expect(allSpecies.count).toBeDefined();
    expect(allSpecies.next).toBeDefined();
    expect(allSpecies.previous).toBeDefined();
    expect(Array.isArray(allSpecies.results)).toBe(true);
    expect(allSpecies.results.length).toBeGreaterThan(0);
    expect(allSpecies.results.at(0)).toBeDefined();

    expect(AllSpeciesSchema.safeParse(allSpecies).success).toBe(true);
  });

  it("GET - /species/:id", async () => {
    const species = await client("/species/:id", {
      id: 3,
    });

    expect(species).toBeDefined();
    expect(species).toMatchSnapshot({
      average_height: "210",
      average_lifespan: "400",
      classification: "mammal",
      created: "2014-12-10T16:44:31.486000Z",
      designation: "sentient",
      edited: "2014-12-20T21:36:42.142000Z",
      eye_colors: "blue, green, yellow, brown, golden, red",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      hair_colors: "black, brown",
      homeworld: "https://swapi.dev/api/planets/14/",
      language: "Shyriiwook",
      name: "Wookie",
      people: [
        "https://swapi.dev/api/people/13/",
        "https://swapi.dev/api/people/80/",
      ],
      skin_colors: "gray",
      url: "https://swapi.dev/api/species/3/",
    });

    expect(SpeciesSchema.safeParse(species).success).toBe(true);
  });
});
