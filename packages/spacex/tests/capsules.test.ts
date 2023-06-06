import { describe, it } from "vitest";

import { CapsuleSchema, CapsulesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Capsules", () => {
  const client = useTestClient();

  it("GET - /v4/capsules", async ({ expect }) => {
    const capsules = await client("/v4/capsules");

    expect(capsules).toBeDefined();
    expect(Array.isArray(capsules)).toBe(true);
    expect(capsules.at(0)).toBeDefined();
    expect(capsules.at(0)).toMatchSnapshot();

    expect(CapsulesSchema.safeParse(capsules).success).toBe(true);
  });

  it("GET - /v4/capsules/:id", async ({ expect }) => {
    const capsule = await client("/v4/capsules/:id", {
      id: "5e9e2c5bf35918ed873b2664",
    });

    expect(capsule).toBeDefined();
    expect(capsule).toMatchSnapshot();

    expect(CapsuleSchema.safeParse(capsule).success).toBe(true);
  });
});
