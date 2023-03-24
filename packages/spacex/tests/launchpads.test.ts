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
    expect(launchpads.at(0)).toMatchSnapshot({
      details:
        "SpaceX's original west coast launch pad for Falcon 1. It was used in a static fire test but was never employed for a launch, and was abandoned due to range scheduling conflicts arising from overflying other active pads.",
      full_name: "Vandenberg Space Force Base Space Launch Complex 3W",
      id: "5e9e4501f5090910d4566f83",
      images: {
        large: ["https://i.imgur.com/7uXe1Kv.png"],
      },
      latitude: 34.6440904,
      launch_attempts: 0,
      launch_successes: 0,
      launches: [],
      locality: "Vandenberg Space Force Base",
      longitude: -120.5931438,
      name: "VAFB SLC 3W",
      region: "California",
      rockets: ["5e9d0d95eda69955f709d1eb"],
      status: "retired",
      timezone: "America/Los_Angeles",
    });

    expect(LaunchPadsSchema.safeParse(launchpads).success).toBe(true);
  });

  it("GET - /v4/launchpads/:id", async ({ expect }) => {
    const launchpad = await client("/v4/launchpads/:id", {
      id: "5e9e4501f5090910d4566f83",
    });

    expect(launchpad).toBeDefined();
    expect(launchpad).toMatchSnapshot({
      details:
        "SpaceX's original west coast launch pad for Falcon 1. It was used in a static fire test but was never employed for a launch, and was abandoned due to range scheduling conflicts arising from overflying other active pads.",
      full_name: "Vandenberg Space Force Base Space Launch Complex 3W",
      id: "5e9e4501f5090910d4566f83",
      images: {
        large: ["https://i.imgur.com/7uXe1Kv.png"],
      },
      latitude: 34.6440904,
      launch_attempts: 0,
      launch_successes: 0,
      launches: [],
      locality: "Vandenberg Space Force Base",
      longitude: -120.5931438,
      name: "VAFB SLC 3W",
      region: "California",
      rockets: ["5e9d0d95eda69955f709d1eb"],
      status: "retired",
      timezone: "America/Los_Angeles",
    });

    expect(LaunchPadSchema.safeParse(launchpad).success).toBe(true);
  });
});
