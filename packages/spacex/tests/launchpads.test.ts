import { describe, it } from "vitest";

import { LaunchPadSchema, LaunchPadsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Launch Pads", () => {
  const client = useTestClient();

  it("GET - /v4/launchpads", async ({ expect }) => {
    const launchpads = await client("/v4/launchpads");

    expect(launchpads).toBeDefined();
    expect(Array.isArray(launchpads)).toBe(true);
    expect(launchpads.at(0)).toBeDefined();
    expect(launchpads.at(0)).toMatchSnapshot();

    expect(LaunchPadsSchema.safeParse(launchpads).success).toBe(true);
  });

  it("GET - /v4/launchpads/:id", async ({ expect }) => {
    const launchpad = await client("/v4/launchpads/:id", {
      id: "5e9e4501f5090910d4566f83",
    });

    expect(launchpad).toBeDefined();
    expect(launchpad).toMatchSnapshot();

    expect(LaunchPadSchema.safeParse(launchpad).success).toBe(true);
  });
});
