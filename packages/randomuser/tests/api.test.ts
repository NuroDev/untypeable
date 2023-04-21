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
});
