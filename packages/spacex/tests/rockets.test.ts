import { describe, it } from "vitest";

import { RocketSchema, RocketsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Rockets", () => {
  const client = useTestClient();

  it("GET - /v4/rockets", async ({ expect }) => {
    const rockets = await client("/v4/rockets");

    expect(rockets).toBeDefined();
    expect(Array.isArray(rockets)).toBe(true);
    expect(rockets.at(0)).toBeDefined();
    expect(rockets.at(0)).toMatchSnapshot({
      active: false,
      boosters: 0,
      company: "SpaceX",
      cost_per_launch: 6700000,
      country: "Republic of the Marshall Islands",
      description:
        "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      diameter: {
        meters: 1.68,
        feet: 5.5,
      },
      engines: {
        engine_loss_max: 0,
        isp: { sea_level: 267, vacuum: 304 },
        layout: "single",
        number: 1,
        propellant_1: "liquid oxygen",
        propellant_2: "RP-1 kerosene",
        thrust_sea_level: { kN: 420, lbf: 94000 },
        thrust_to_weight: 96,
        thrust_vacuum: { kN: 480, lbf: 110000 },
        type: "merlin",
        version: "1C",
      },
      first_flight: "2006-03-24",
      first_stage: {
        burn_time_sec: 169,
        engines: 1,
        fuel_amount_tons: 44.3,
        reusable: false,
        thrust_sea_level: { kN: 420, lbf: 94000 },
        thrust_vacuum: { kN: 480, lbf: 110000 },
      },
      flickr_images: [
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg",
      ],
      height: { meters: 22.25, feet: 73 },
      id: "5e9d0d95eda69955f709d1eb",
      landing_legs: { number: 0, material: null },
      mass: { kg: 30146, lb: 66460 },
      name: "Falcon 1",
      payload_weights: [
        { id: "leo", name: "Low Earth Orbit", kg: 450, lb: 992 },
      ],
      second_stage: {
        burn_time_sec: 378,
        engines: 1,
        fuel_amount_tons: 3.38,
        payloads: {
          composite_fairing: {
            diameter: { meters: 1.5, feet: 4.9 },
            height: { meters: 3.5, feet: 11.5 },
          },
          option_1: "composite fairing",
        },
        reusable: false,
        thrust: { kN: 31, lbf: 7000 },
      },
      stages: 2,
      success_rate_pct: 40,
      type: "rocket",
      wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
    });

    expect(RocketsSchema.safeParse(rockets).success).toBe(true);
  });

  it("GET - /v4/rockets/:id", async ({ expect }) => {
    const rocket = await client("/v4/rockets/:id", {
      id: "5e9d0d95eda69955f709d1eb",
    });

    expect(rocket).toBeDefined();
    expect(rocket).toMatchSnapshot({
      active: false,
      boosters: 0,
      company: "SpaceX",
      cost_per_launch: 6700000,
      country: "Republic of the Marshall Islands",
      description:
        "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      diameter: {
        meters: 1.68,
        feet: 5.5,
      },
      engines: {
        engine_loss_max: 0,
        isp: { sea_level: 267, vacuum: 304 },
        layout: "single",
        number: 1,
        propellant_1: "liquid oxygen",
        propellant_2: "RP-1 kerosene",
        thrust_sea_level: { kN: 420, lbf: 94000 },
        thrust_to_weight: 96,
        thrust_vacuum: { kN: 480, lbf: 110000 },
        type: "merlin",
        version: "1C",
      },
      first_flight: "2006-03-24",
      first_stage: {
        burn_time_sec: 169,
        engines: 1,
        fuel_amount_tons: 44.3,
        reusable: false,
        thrust_sea_level: { kN: 420, lbf: 94000 },
        thrust_vacuum: { kN: 480, lbf: 110000 },
      },
      flickr_images: [
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg",
      ],
      height: { meters: 22.25, feet: 73 },
      id: "5e9d0d95eda69955f709d1eb",
      landing_legs: { number: 0, material: null },
      mass: { kg: 30146, lb: 66460 },
      name: "Falcon 1",
      payload_weights: [
        { id: "leo", name: "Low Earth Orbit", kg: 450, lb: 992 },
      ],
      second_stage: {
        burn_time_sec: 378,
        engines: 1,
        fuel_amount_tons: 3.38,
        payloads: {
          composite_fairing: {
            diameter: { meters: 1.5, feet: 4.9 },
            height: { meters: 3.5, feet: 11.5 },
          },
          option_1: "composite fairing",
        },
        reusable: false,
        thrust: { kN: 31, lbf: 7000 },
      },
      stages: 2,
      success_rate_pct: 40,
      type: "rocket",
      wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
    });

    expect(RocketSchema.safeParse(rocket).success).toBe(true);
  });
});
