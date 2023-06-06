import { describe, it } from "vitest";

import { FilmSchema, FilmsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Films", () => {
  const client = useTestClient();

  it("GET - /films", async ({ expect }) => {
    const films = await client("/films");

    expect(films).toBeDefined();
    expect(films.count).toBeDefined();
    expect(films.next).toBeDefined();
    expect(films.previous).toBeDefined();
    expect(Array.isArray(films.results)).toBe(true);
    expect(films.results.length).toBeGreaterThan(0);
    expect(films.results.at(0)).toBeDefined();

    expect(FilmsSchema.safeParse(films).success).toBe(true);
  });

  it("GET - /films/:id", async ({ expect }) => {
    const film = await client("/films/:id", {
      id: 1,
    });

    expect(film).toBeDefined();
    expect(film).toMatchSnapshot();

    expect(FilmSchema.safeParse(film).success).toBe(true);
  });
});
