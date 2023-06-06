import { describe, it } from "vitest";

import { VehicleSchema, VehiclesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Vehicles", () => {
  const client = useTestClient();

  it("GET - /vehicles", async ({ expect }) => {
    const vehicles = await client("/vehicles");

    expect(vehicles).toBeDefined();
    expect(vehicles.count).toBeDefined();
    expect(vehicles.next).toBeDefined();
    expect(vehicles.previous).toBeDefined();
    expect(Array.isArray(vehicles.results)).toBe(true);
    expect(vehicles.results.length).toBeGreaterThan(0);
    expect(vehicles.results.at(0)).toBeDefined();

    expect(VehiclesSchema.safeParse(vehicles).success).toBe(true);
  });

  it("GET - /vehicles/:id", async ({ expect }) => {
    const vehicle = await client("/vehicles/:id", {
      id: 4,
    });

    expect(vehicle).toBeDefined();
    expect(vehicle).toMatchSnapshot();

    expect(VehicleSchema.safeParse(vehicle).success).toBe(true);
  });
});
