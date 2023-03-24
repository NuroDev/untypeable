import { describe, it } from "vitest";

import {
  LaunchesV4Schema,
  LaunchesV5Schema,
  LaunchV4Schema,
  LaunchV5Schema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Launches", () => {
  const client = useTestClient();

  it("GET - /v4/launches", async ({ expect }) => {
    const launches = await client("/v4/launches");

    expect(launches).toBeDefined();
    expect(Array.isArray(launches)).toBe(true);
    expect(launches.at(0)).toBeDefined();
    expect(launches.at(0)).toMatchSnapshot({
      auto_update: true,
      capsules: [],
      cores: [
        {
          core: "5e9e289df35918033d3b2623",
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      crew: [],
      date_local: "2006-03-25T10:30:00+12:00",
      date_precision: "hour",
      date_unix: 1143239400,
      date_utc: "2006-03-24T22:30:00.000Z",
      details: "Engine failure at 33 seconds and loss of vehicle",
      failures: [{ time: 33, altitude: null, reason: "merlin engine failure" }],
      fairings: {
        recovered: false,
        recovery_attempt: false,
        reused: false,
        ships: [],
      },
      flight_number: 1,
      id: "5eb87cd9ffd86e000604b32a",
      launch_library_id: null,
      launchpad: "5e9e4502f5090995de566f86",
      links: {
        article:
          "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
        flickr: { small: [], original: [] },
        patch: {
          small: "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
          large: "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png",
        },
        reddit: { campaign: null, launch: null, media: null, recovery: null },
        presskit: null,
        webcast: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
        wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
        youtube_id: "0a_00nJ_Y88",
      },
      name: "FalconSat",
      net: false,
      payloads: ["5eb0e4b5b6c3bb0006eeb1e1"],
      rocket: "5e9d0d95eda69955f709d1eb",
      ships: [],
      static_fire_date_unix: 1142553600,
      static_fire_date_utc: "2006-03-17T00:00:00.000Z",
      success: false,
      tbd: false,
      upcoming: false,
      window: 0,
    });

    expect(LaunchesV4Schema.safeParse(launches).success).toBe(true);
  });

  it("GET - /v4/launches/latest", async ({ expect }) => {
    const launch = await client("/v4/launches/latest");

    expect(launch).toBeDefined();
    expect(LaunchV4Schema.safeParse(launch).success).toBe(true);
  });

  it("GET - /v4/launches/next", async ({ expect }) => {
    const launch = await client("/v4/launches/next");

    expect(launch).toBeDefined();
    expect(LaunchV4Schema.safeParse(launch).success).toBe(true);
  });

  it("GET - /v4/launches/past", async ({ expect }) => {
    const launches = await client("/v4/launches/past");

    expect(launches).toBeDefined();
    expect(LaunchesV4Schema.safeParse(launches).success).toBe(true);
  });

  it("GET - /v4/launches/upcoming", async ({ expect }) => {
    const launches = await client("/v4/launches/upcoming");

    expect(launches).toBeDefined();
    expect(LaunchesV4Schema.safeParse(launches).success).toBe(true);
  });

  it("GET - /v4/launches/:id", async ({ expect }) => {
    const launch = await client("/v4/launches/:id", {
      id: "5eb87cd9ffd86e000604b32a",
    });

    expect(launch).toBeDefined();
    expect(launch).toMatchSnapshot({
      auto_update: true,
      capsules: [],
      cores: [
        {
          core: "5e9e289df35918033d3b2623",
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      crew: [],
      date_local: "2006-03-25T10:30:00+12:00",
      date_precision: "hour",
      date_unix: 1143239400,
      date_utc: "2006-03-24T22:30:00.000Z",
      details: "Engine failure at 33 seconds and loss of vehicle",
      failures: [{ time: 33, altitude: null, reason: "merlin engine failure" }],
      fairings: {
        recovered: false,
        recovery_attempt: false,
        reused: false,
        ships: [],
      },
      flight_number: 1,
      id: "5eb87cd9ffd86e000604b32a",
      launch_library_id: null,
      launchpad: "5e9e4502f5090995de566f86",
      links: {
        article:
          "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
        flickr: { small: [], original: [] },
        patch: {
          small: "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
          large: "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png",
        },
        reddit: { campaign: null, launch: null, media: null, recovery: null },
        presskit: null,
        webcast: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
        wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
        youtube_id: "0a_00nJ_Y88",
      },
      name: "FalconSat",
      net: false,
      payloads: ["5eb0e4b5b6c3bb0006eeb1e1"],
      rocket: "5e9d0d95eda69955f709d1eb",
      ships: [],
      static_fire_date_unix: 1142553600,
      static_fire_date_utc: "2006-03-17T00:00:00.000Z",
      success: false,
      tbd: false,
      upcoming: false,
      window: 0,
    });

    expect(LaunchV4Schema.safeParse(launch).success).toBe(true);
  });

  it("GET - /v5/launches", async ({ expect }) => {
    const launches = await client("/v5/launches");

    expect(launches).toBeDefined();
    expect(Array.isArray(launches)).toBe(true);
    expect(launches.at(0)).toBeDefined();
    expect(launches.at(0)).toMatchSnapshot({
      auto_update: true,
      capsules: [],
      cores: [
        {
          core: "5e9e289df35918033d3b2623",
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      crew: [],
      date_local: "2006-03-25T10:30:00+12:00",
      date_precision: "hour",
      date_unix: 1143239400,
      date_utc: "2006-03-24T22:30:00.000Z",
      details: "Engine failure at 33 seconds and loss of vehicle",
      failures: [{ time: 33, altitude: null, reason: "merlin engine failure" }],
      fairings: {
        recovered: false,
        recovery_attempt: false,
        reused: false,
        ships: [],
      },
      flight_number: 1,
      id: "5eb87cd9ffd86e000604b32a",
      launch_library_id: null,
      launchpad: "5e9e4502f5090995de566f86",
      links: {
        article:
          "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
        flickr: { small: [], original: [] },
        patch: {
          small: "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
          large: "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png",
        },
        reddit: { campaign: null, launch: null, media: null, recovery: null },
        presskit: null,
        webcast: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
        wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
        youtube_id: "0a_00nJ_Y88",
      },
      name: "FalconSat",
      net: false,
      payloads: ["5eb0e4b5b6c3bb0006eeb1e1"],
      rocket: "5e9d0d95eda69955f709d1eb",
      ships: [],
      static_fire_date_unix: 1142553600,
      static_fire_date_utc: "2006-03-17T00:00:00.000Z",
      success: false,
      tbd: false,
      upcoming: false,
      window: 0,
    });

    expect(LaunchesV5Schema.safeParse(launches).success).toBe(true);
  });

  it("GET - /v5/launches/latest", async ({ expect }) => {
    const launch = await client("/v5/launches/latest");

    expect(launch).toBeDefined();
    expect(LaunchV5Schema.safeParse(launch).success).toBe(true);
  });

  it("GET - /v5/launches/next", async ({ expect }) => {
    const launch = await client("/v5/launches/next");

    expect(launch).toBeDefined();
    expect(LaunchV5Schema.safeParse(launch).success).toBe(true);
  });

  it("GET - /v5/launches/past", async ({ expect }) => {
    const launches = await client("/v5/launches/past");

    expect(launches).toBeDefined();
    expect(LaunchesV5Schema.safeParse(launches).success).toBe(true);
  });

  it("GET - /v5/launches/upcoming", async ({ expect }) => {
    const launches = await client("/v5/launches/upcoming");

    expect(launches).toBeDefined();
    expect(LaunchesV5Schema.safeParse(launches).success).toBe(true);
  });

  it("GET - /v5/launches/:id", async ({ expect }) => {
    const launch = await client("/v5/launches/:id", {
      id: "5eb87cd9ffd86e000604b32a",
    });

    expect(launch).toBeDefined();
    expect(launch).toMatchSnapshot({
      auto_update: true,
      capsules: [],
      cores: [
        {
          core: "5e9e289df35918033d3b2623",
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      crew: [],
      date_local: "2006-03-25T10:30:00+12:00",
      date_precision: "hour",
      date_unix: 1143239400,
      date_utc: "2006-03-24T22:30:00.000Z",
      details: "Engine failure at 33 seconds and loss of vehicle",
      failures: [{ time: 33, altitude: null, reason: "merlin engine failure" }],
      fairings: {
        recovered: false,
        recovery_attempt: false,
        reused: false,
        ships: [],
      },
      flight_number: 1,
      id: "5eb87cd9ffd86e000604b32a",
      launch_library_id: null,
      launchpad: "5e9e4502f5090995de566f86",
      links: {
        article:
          "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
        flickr: { small: [], original: [] },
        patch: {
          small: "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
          large: "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png",
        },
        reddit: { campaign: null, launch: null, media: null, recovery: null },
        presskit: null,
        webcast: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
        wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
        youtube_id: "0a_00nJ_Y88",
      },
      name: "FalconSat",
      net: false,
      payloads: ["5eb0e4b5b6c3bb0006eeb1e1"],
      rocket: "5e9d0d95eda69955f709d1eb",
      ships: [],
      static_fire_date_unix: 1142553600,
      static_fire_date_utc: "2006-03-17T00:00:00.000Z",
      success: false,
      tbd: false,
      upcoming: false,
      window: 0,
    });

    expect(LaunchV5Schema.safeParse(launch).success).toBe(true);
  });
});
