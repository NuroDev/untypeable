import { describe, it, expect } from "vitest";

import { RootSchema } from "./zod";
import { useTestClient } from "./_shared.util";

describe.concurrent("SWAPI - Root", () => {
  const client = useTestClient();

  it("GET - /", async () => {
    const root = await client("/");

    expect(root).toBeDefined();
    expect(root.films).toBeDefined();
    expect(root.films).toBe("https://swapi.dev/api/films/");
    expect(root.people).toBeDefined();
    expect(root.people).toBe("https://swapi.dev/api/people/");
    expect(root.planets).toBeDefined();
    expect(root.planets).toBe("https://swapi.dev/api/planets/");
    expect(root.species).toBeDefined();
    expect(root.species).toBe("https://swapi.dev/api/species/");
    expect(root.starships).toBeDefined();
    expect(root.starships).toBe("https://swapi.dev/api/starships/");
    expect(root.vehicles).toBeDefined();
    expect(root.vehicles).toBe("https://swapi.dev/api/vehicles/");

    expect(RootSchema.safeParse(root).success).toBe(true);
  });
});
