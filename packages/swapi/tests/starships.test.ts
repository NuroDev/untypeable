import { describe, it } from "vitest";

import { StarshipSchema, StarshipsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Starships", () => {
  const client = useTestClient();

  it("GET - /starships", async ({ expect }) => {
    const starships = await client("/starships");

    expect(starships).toBeDefined();
    expect(starships.count).toBeDefined();
    expect(starships.next).toBeDefined();
    expect(starships.previous).toBeDefined();
    expect(Array.isArray(starships.results)).toBe(true);
    expect(starships.results.length).toBeGreaterThan(0);
    expect(starships.results.at(0)).toBeDefined();

    expect(StarshipsSchema.safeParse(starships).success).toBe(true);
  });

  it("GET - /starships/:id", async ({ expect }) => {
    const starship = await client("/starships/:id", {
      id: 2,
    });

    expect(starship).toBeDefined();
    expect(starship).toMatchSnapshot({
      cargo_capacity: "3000000",
      consumables: "1 year",
      cost_in_credits: "3500000",
      created: "2014-12-10T14:20:33.369000Z",
      crew: "30-165",
      edited: "2014-12-20T21:23:49.867000Z",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      hyperdrive_rating: "2.0",
      length: "150",
      manufacturer: "Corellian Engineering Corporation",
      max_atmosphering_speed: "950",
      MGLT: "60",
      model: "CR90 corvette",
      name: "CR90 corvette",
      passengers: "600",
      pilots: [],
      starship_class: "corvette",
      url: "https://swapi.dev/api/starships/2/",
    });

    expect(StarshipSchema.safeParse(starship).success).toBe(true);
  });
});
