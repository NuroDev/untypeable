import { describe, it } from "vitest";

import { LandPadSchema, LandPadsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Land Pads", () => {
  const client = useTestClient();

  it("GET - /v4/landpads", async ({ expect }) => {
    const landPads = await client("/v4/landpads");

    expect(landPads).toBeDefined();
    expect(Array.isArray(landPads)).toBe(true);
    expect(landPads.at(0)).toBeDefined();
    expect(landPads.at(0)).toMatchSnapshot({
      id: "5e9e3032383ecb267a34e7c7",
      details:
        "SpaceX's first east coast landing pad is Landing Zone 1, where the historic first Falcon 9 landing occurred in December 2015. LC-13 was originally used as a launch pad for early Atlas missiles and rockets from Lockheed Martin. LC-1 was later expanded to include Landing Zone 2 for side booster RTLS Falcon Heavy missions, and it was first used in February 2018 for that purpose.",
      full_name: "Landing Zone 1",
      images: {
        large: ["https://i.imgur.com/KHBk6jO.png"],
      },
      landing_attempts: 21,
      landing_successes: 20,
      latitude: 28.485833,
      launches: [
        "5eb87cefffd86e000604b342",
        "5eb87cf9ffd86e000604b349",
        "5eb87cfeffd86e000604b34d",
        "5eb87d01ffd86e000604b350",
        "5eb87d03ffd86e000604b352",
        "5eb87d07ffd86e000604b356",
        "5eb87d09ffd86e000604b358",
        "5eb87d0effd86e000604b35c",
        "5eb87d10ffd86e000604b35e",
        "5eb87d13ffd86e000604b360",
        "5eb87d26ffd86e000604b371",
        "5eb87d2dffd86e000604b376",
        "5eb87d35ffd86e000604b37a",
        "5eb87d36ffd86e000604b37b",
        "5eb87d42ffd86e000604b384",
        "5eb87d47ffd86e000604b38a",
        "5f8399fb818d8b59f5740d43",
        "600f9b6d8f798e2a4d5f979f",
        "61bf3e31cd5ab50b0d936345",
        "6161d32d6db1a92bfba85359",
        "6243ae24af52800c6e919258",
      ],
      locality: "Cape Canaveral",
      longitude: -80.544444,
      name: "LZ-1",
      region: "Florida",
      status: "active",
      type: "RTLS",
      wikipedia: "https://en.wikipedia.org/wiki/Landing_Zones_1_and_2",
    });

    expect(LandPadsSchema.safeParse(landPads).success).toBe(true);
  });

  it("GET - /v4/landpads/:id", async ({ expect }) => {
    const landPad = await client("/v4/landpads/:id", {
      id: "5e9e3032383ecb267a34e7c7",
    });

    expect(landPad).toBeDefined();
    expect(landPad).toMatchSnapshot({
      id: "5e9e3032383ecb267a34e7c7",
      details:
        "SpaceX's first east coast landing pad is Landing Zone 1, where the historic first Falcon 9 landing occurred in December 2015. LC-13 was originally used as a launch pad for early Atlas missiles and rockets from Lockheed Martin. LC-1 was later expanded to include Landing Zone 2 for side booster RTLS Falcon Heavy missions, and it was first used in February 2018 for that purpose.",
      full_name: "Landing Zone 1",
      images: {
        large: ["https://i.imgur.com/KHBk6jO.png"],
      },
      landing_attempts: 21,
      landing_successes: 20,
      latitude: 28.485833,
      launches: [
        "5eb87cefffd86e000604b342",
        "5eb87cf9ffd86e000604b349",
        "5eb87cfeffd86e000604b34d",
        "5eb87d01ffd86e000604b350",
        "5eb87d03ffd86e000604b352",
        "5eb87d07ffd86e000604b356",
        "5eb87d09ffd86e000604b358",
        "5eb87d0effd86e000604b35c",
        "5eb87d10ffd86e000604b35e",
        "5eb87d13ffd86e000604b360",
        "5eb87d26ffd86e000604b371",
        "5eb87d2dffd86e000604b376",
        "5eb87d35ffd86e000604b37a",
        "5eb87d36ffd86e000604b37b",
        "5eb87d42ffd86e000604b384",
        "5eb87d47ffd86e000604b38a",
        "5f8399fb818d8b59f5740d43",
        "600f9b6d8f798e2a4d5f979f",
        "61bf3e31cd5ab50b0d936345",
        "6161d32d6db1a92bfba85359",
        "6243ae24af52800c6e919258",
      ],
      locality: "Cape Canaveral",
      longitude: -80.544444,
      name: "LZ-1",
      region: "Florida",
      status: "active",
      type: "RTLS",
      wikipedia: "https://en.wikipedia.org/wiki/Landing_Zones_1_and_2",
    });

    expect(LandPadSchema.safeParse(landPad).success).toBe(true);
  });
});
