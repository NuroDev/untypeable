import { describe, it, expect } from "vitest";

import { VehicleSchema, VehiclesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Vehicles", () => {
  const client = useTestClient();

  it("GET - /vehicles", async () => {
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

  it("GET - /vehicles/:id", async () => {
    const vehicle = await client("/vehicles/:id", {
      id: 4,
    });

    expect(vehicle).toBeDefined();
    expect(vehicle).toMatchSnapshot({
      cargo_capacity: "50000",
      consumables: "2 months",
      cost_in_credits: "150000",
      created: "2014-12-10T15:36:25.724000Z",
      crew: "46",
      edited: "2014-12-20T21:30:21.661000Z",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
      ],
      length: "36.8 ",
      manufacturer: "Corellia Mining Corporation",
      max_atmosphering_speed: "30",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      pilots: [],
      url: "https://swapi.dev/api/vehicles/4/",
      vehicle_class: "wheeled",
    });

    expect(VehicleSchema.safeParse(vehicle).success).toBe(true);
  });
});
