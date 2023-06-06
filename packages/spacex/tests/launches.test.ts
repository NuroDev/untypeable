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
    expect(launches.at(0)).toMatchSnapshot();

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
    expect(launch).toMatchSnapshot();

    expect(LaunchV4Schema.safeParse(launch).success).toBe(true);
  });

  it("GET - /v5/launches", async ({ expect }) => {
    const launches = await client("/v5/launches");

    expect(launches).toBeDefined();
    expect(Array.isArray(launches)).toBe(true);
    expect(launches.at(0)).toBeDefined();
    expect(launches.at(0)).toMatchSnapshot();

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
    expect(launch).toMatchSnapshot();

    expect(LaunchV5Schema.safeParse(launch).success).toBe(true);
  });
});
