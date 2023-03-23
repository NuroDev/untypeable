import { describe, it } from "vitest";

import { CapsuleSchema, CapsulesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Capsules", () => {
  const client = useTestClient();

  it("GET - /capsules", async ({ expect }) => {
    const capsules = await client("/capsules");

    expect(capsules).toBeDefined();
    expect(Array.isArray(capsules)).toBe(true);
    expect(capsules.at(0)).toBeDefined();
    expect(capsules.at(-1)).toMatchSnapshot({
      id: "62615d180ec008379be596f1",
      land_landings: 0,
      last_update: null,
      launches: ["6243ade2af52800c6e919255"],
      reuse_count: 0,
      serial: "C212",
      status: "active",
      type: "Dragon 2.0",
      water_landings: 0,
    });

    expect(CapsulesSchema.safeParse(capsules).success).toBe(true);
  });

  it("GET - /capsules/:id", async ({ expect }) => {
    const capsule = await client("/capsules/:id", {
      id: "5e9e2c5bf35918ed873b2664",
    });

    expect(capsule).toBeDefined();
    expect(capsule).toMatchSnapshot({
      id: "5e9e2c5bf35918ed873b2664",
      land_landings: 0,
      last_update: "Hanging in atrium at SpaceX HQ in Hawthorne ",
      launches: ["5eb87cdeffd86e000604b330"],
      reuse_count: 0,
      serial: "C101",
      status: "retired",
      type: "Dragon 1.0",
      water_landings: 1,
    });

    expect(CapsuleSchema.safeParse(capsule).success).toBe(true);
  });
});
