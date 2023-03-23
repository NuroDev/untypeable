import { describe, it } from "vitest";

import { DragonSchema, DragonsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Dragons", () => {
  const client = useTestClient();

  it("GET - /dragons", async ({ expect }) => {
    const dragons = await client("/v4/dragons");

    expect(dragons).toBeDefined();
    expect(Array.isArray(dragons)).toBe(true);
    expect(dragons.at(0)).toBeDefined();
    expect(dragons.at(0)).toMatchSnapshot({
      active: true,
      crew_capacity: 0,
      description:
        "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
      diameter: { meters: 3.7, feet: 12 },
      dry_mass_kg: 4200,
      dry_mass_lb: 9300,
      first_flight: "2010-12-08",
      flickr_images: [
        "https://i.imgur.com/9fWdwNv.jpg",
        "https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg",
        "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
        "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg",
      ],
      heat_shield: {
        dev_partner: "NASA",
        material: "PICA-X",
        size_meters: 3.6,
        temp_degrees: 3000,
      },
      height_w_trunk: {
        meters: 7.2,
        feet: 23.6,
      },
      id: "5e9d058759b1ff74a7ad5f8f",
      launch_payload_mass: {
        kg: 6000,
        lb: 13228,
      },
      launch_payload_vol: {
        cubic_meters: 25,
        cubic_feet: 883,
      },
      name: "Dragon 1",
      orbit_duration_yr: 2,
      pressurized_capsule: {
        payload_volume: {
          cubic_meters: 11,
          cubic_feet: 388,
        },
      },
      return_payload_mass: {
        kg: 3000,
        lb: 6614,
      },
      return_payload_vol: {
        cubic_meters: 11,
        cubic_feet: 388,
      },
      sidewall_angle_deg: 15,
      thrusters: [
        {
          amount: 18,
          fuel_1: "nitrogen tetroxide",
          fuel_2: "monomethylhydrazine",
          isp: 300,
          pods: 4,
          thrust: { kN: 0.4, lbf: 90 },
          type: "Draco",
        },
      ],
      trunk: {
        trunk_volume: {
          cubic_meters: 14,
          cubic_feet: 494,
        },
        cargo: {
          solar_array: 2,
          unpressurized_cargo: true,
        },
      },
      type: "capsule",
      wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Dragon",
    });

    expect(DragonsSchema.safeParse(dragons).success).toBe(true);
  });

  it("GET - /capsules/:id", async ({ expect }) => {
    const dragon = await client("/v4/dragons/:id", {
      id: "5e9d058759b1ff74a7ad5f8f",
    });

    expect(dragon).toBeDefined();
    expect(dragon).toMatchSnapshot({
      active: true,
      crew_capacity: 0,
      description:
        "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
      diameter: { meters: 3.7, feet: 12 },
      dry_mass_kg: 4200,
      dry_mass_lb: 9300,
      first_flight: "2010-12-08",
      flickr_images: [
        "https://i.imgur.com/9fWdwNv.jpg",
        "https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg",
        "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
        "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg",
      ],
      heat_shield: {
        dev_partner: "NASA",
        material: "PICA-X",
        size_meters: 3.6,
        temp_degrees: 3000,
      },
      height_w_trunk: {
        meters: 7.2,
        feet: 23.6,
      },
      id: "5e9d058759b1ff74a7ad5f8f",
      launch_payload_mass: {
        kg: 6000,
        lb: 13228,
      },
      launch_payload_vol: {
        cubic_meters: 25,
        cubic_feet: 883,
      },
      name: "Dragon 1",
      orbit_duration_yr: 2,
      pressurized_capsule: {
        payload_volume: {
          cubic_meters: 11,
          cubic_feet: 388,
        },
      },
      return_payload_mass: {
        kg: 3000,
        lb: 6614,
      },
      return_payload_vol: {
        cubic_meters: 11,
        cubic_feet: 388,
      },
      sidewall_angle_deg: 15,
      thrusters: [
        {
          amount: 18,
          fuel_1: "nitrogen tetroxide",
          fuel_2: "monomethylhydrazine",
          isp: 300,
          pods: 4,
          thrust: { kN: 0.4, lbf: 90 },
          type: "Draco",
        },
      ],
      trunk: {
        trunk_volume: {
          cubic_meters: 14,
          cubic_feet: 494,
        },
        cargo: {
          solar_array: 2,
          unpressurized_cargo: true,
        },
      },
      type: "capsule",
      wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Dragon",
    });

    expect(DragonSchema.safeParse(dragon).success).toBe(true);
  });
});
