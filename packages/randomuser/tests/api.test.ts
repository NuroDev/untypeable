import { describe, it, expect } from "vitest";

import { ApiSchema, UserSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("Random User - API", () => {
  const client = useTestClient();

  it("GET - /api", async () => {
    const randomUser = await client("/api");

    expect(randomUser).toBeDefined();
    expect(randomUser.results).toBeDefined();
    expect(randomUser.results.length).toBeGreaterThan(0);
    expect(randomUser.results.at(0)).toBeDefined();

    expect(ApiSchema.safeParse(randomUser).success).toBe(true);
    expect(UserSchema.safeParse(randomUser.results.at(0)).success).toBe(true);
  });

  it("GET - /api?seed=foobar&gender=female", async () => {
    const gender = "female";
    const seed = "foobar";

    const randomUser = await client("/api", {
      gender,
      seed,
    });

    expect(randomUser).toBeDefined();
    expect(randomUser.results).toBeDefined();
    expect(randomUser.results.length).toBeGreaterThan(0);
    expect(randomUser.results.at(0)).toBeDefined();
    expect(randomUser.results.at(0)?.gender).toBe(gender);
    expect(randomUser.info.seed).toBe(seed);

    expect(ApiSchema.safeParse(randomUser).success).toBe(true);
    expect(UserSchema.safeParse(randomUser.results.at(0)).success).toBe(true);
  });
});
