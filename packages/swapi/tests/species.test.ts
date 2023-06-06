import { describe, it } from "vitest";

import { AllSpeciesSchema, SpeciesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Species", () => {
  const client = useTestClient();

  it("GET - /species", async ({ expect }) => {
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

  it("GET - /species/:id", async ({ expect }) => {
    const species = await client("/species/:id", {
      id: 3,
    });

    expect(species).toBeDefined();
    expect(species).toMatchSnapshot();

    expect(SpeciesSchema.safeParse(species).success).toBe(true);
  });
});
