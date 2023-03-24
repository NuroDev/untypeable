import { describe, it } from "vitest";

import { PayloadSchema, PayloadsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Payloads", () => {
  const client = useTestClient();

  it("GET - /v4/payloads", async ({ expect }) => {
    const payloads = await client("/v4/payloads");

    expect(payloads).toBeDefined();
    expect(Array.isArray(payloads)).toBe(true);
    expect(payloads.at(0)).toBeDefined();
    expect(payloads.at(0)).toMatchSnapshot({
      apoapsis_km: 500,
      arg_of_pericenter: null,
      customers: ["DARPA"],
      dragon: {
        capsule: null,
        flight_time_sec: null,
        land_landing: null,
        manifest: null,
        mass_returned_kg: null,
        mass_returned_lbs: null,
        water_landing: null,
      },
      eccentricity: null,
      epoch: null,
      id: "5eb0e4b5b6c3bb0006eeb1e1",
      inclination_deg: 39,
      launch: "5eb87cd9ffd86e000604b32a",
      lifespan_years: null,
      longitude: null,
      manufacturers: ["SSTL"],
      mass_kg: 20,
      mass_lbs: 43,
      mean_anomaly: null,
      mean_motion: null,
      name: "FalconSAT-2",
      nationalities: ["United States"],
      norad_ids: [],
      orbit: "LEO",
      periapsis_km: 400,
      period_min: null,
      raan: null,
      reference_system: "geocentric",
      regime: "low-earth",
      reused: false,
      semi_major_axis_km: null,
      type: "Satellite",
    });

    expect(PayloadsSchema.safeParse(payloads).success).toBe(true);
  });

  it("GET - /v4/payloads/:id", async ({ expect }) => {
    const payload = await client("/v4/payloads/:id", {
      id: "5eb0e4b5b6c3bb0006eeb1e1",
    });

    expect(payload).toBeDefined();
    expect(payload).toMatchSnapshot({
      apoapsis_km: 500,
      arg_of_pericenter: null,
      customers: ["DARPA"],
      dragon: {
        capsule: null,
        flight_time_sec: null,
        land_landing: null,
        manifest: null,
        mass_returned_kg: null,
        mass_returned_lbs: null,
        water_landing: null,
      },
      eccentricity: null,
      epoch: null,
      id: "5eb0e4b5b6c3bb0006eeb1e1",
      inclination_deg: 39,
      launch: "5eb87cd9ffd86e000604b32a",
      lifespan_years: null,
      longitude: null,
      manufacturers: ["SSTL"],
      mass_kg: 20,
      mass_lbs: 43,
      mean_anomaly: null,
      mean_motion: null,
      name: "FalconSAT-2",
      nationalities: ["United States"],
      norad_ids: [],
      orbit: "LEO",
      periapsis_km: 400,
      period_min: null,
      raan: null,
      reference_system: "geocentric",
      regime: "low-earth",
      reused: false,
      semi_major_axis_km: null,
      type: "Satellite",
    });

    expect(PayloadSchema.safeParse(payload).success).toBe(true);
  });
});
