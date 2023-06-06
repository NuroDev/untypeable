import { describe, it } from "vitest";

import { StarlinkSatelliteSchema, StarlinkSatellitesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Starlink", () => {
  const client = useTestClient();

  it("GET - /v4/starlink", async ({ expect }) => {
    const starlinkSatellites = await client("/v4/starlink");

    expect(starlinkSatellites).toBeDefined();
    expect(Array.isArray(starlinkSatellites)).toBe(true);
    expect(starlinkSatellites.at(0)).toBeDefined();
    expect(starlinkSatellites.at(0)).toMatchSnapshot();

    expect(StarlinkSatellitesSchema.safeParse(starlinkSatellites).success).toBe(
      true
    );
  });

  it("GET - /v4/starlink/:id", async ({ expect }) => {
    const starlinkSatellite = await client("/v4/starlink/:id", {
      id: "5eed770f096e59000698560d",
    });

    expect(starlinkSatellite).toBeDefined();
    expect(starlinkSatellite).toMatchSnapshot();

    expect(StarlinkSatelliteSchema.safeParse(starlinkSatellite).success).toBe(
      true
    );
  });
});
