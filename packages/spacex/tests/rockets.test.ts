import { describe, it } from "vitest";

import { RocketSchema, RocketsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Rockets", () => {
  const client = useTestClient();

  it("GET - /v4/rockets", async ({ expect }) => {
    const rockets = await client("/v4/rockets");

    expect(rockets).toBeDefined();
    expect(Array.isArray(rockets)).toBe(true);
    expect(rockets.at(0)).toBeDefined();
    expect(rockets.at(0)).toMatchSnapshot();

    expect(RocketsSchema.safeParse(rockets).success).toBe(true);
  });

  it("GET - /v4/rockets/:id", async ({ expect }) => {
    const rocket = await client("/v4/rockets/:id", {
      id: "5e9d0d95eda69955f709d1eb",
    });

    expect(rocket).toBeDefined();
    expect(rocket).toMatchSnapshot();

    expect(RocketSchema.safeParse(rocket).success).toBe(true);
  });
});
