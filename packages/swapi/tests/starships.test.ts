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
    expect(starship).toMatchSnapshot();

    expect(StarshipSchema.safeParse(starship).success).toBe(true);
  });
});
