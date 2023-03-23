import { describe, it } from "vitest";

import { CoreSchema, CoresSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Cores", () => {
  const client = useTestClient();

  it("GET - /cores", async ({ expect }) => {
    const cores = await client("/v4/cores");

    expect(cores).toBeDefined();
    expect(Array.isArray(cores)).toBe(true);
    expect(cores.at(0)).toBeDefined();
    expect(cores.at(0)).toMatchSnapshot({
      asds_attempts: 0,
      asds_landings: 0,
      block: null,
      id: "5e9e289df35918033d3b2623",
      last_update: "Engine failure at T+33 seconds resulted in loss of vehicle",
      launches: ["5eb87cd9ffd86e000604b32a"],
      reuse_count: 0,
      rtls_attempts: 0,
      rtls_landings: 0,
      serial: "Merlin1A",
      status: "lost",
    });

    expect(CoresSchema.safeParse(cores).success).toBe(true);
  });

  it("GET - /capsules/:id", async ({ expect }) => {
    const core = await client("/v4/cores/:id", {
      id: "5e9e289df35918033d3b2623",
    });

    expect(core).toBeDefined();
    expect(core).toMatchSnapshot({
      asds_attempts: 0,
      asds_landings: 0,
      block: null,
      id: "5e9e289df35918033d3b2623",
      last_update: "Engine failure at T+33 seconds resulted in loss of vehicle",
      launches: ["5eb87cd9ffd86e000604b32a"],
      reuse_count: 0,
      rtls_attempts: 0,
      rtls_landings: 0,
      serial: "Merlin1A",
      status: "lost",
    });

    expect(CoreSchema.safeParse(core).success).toBe(true);
  });
});
