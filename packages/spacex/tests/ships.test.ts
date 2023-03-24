import { describe, it } from "vitest";

import { ShipSchema, ShipsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Ships", () => {
  const client = useTestClient();

  it("GET - /v4/ships", async ({ expect }) => {
    const ships = await client("/v4/ships");

    expect(ships).toBeDefined();
    expect(Array.isArray(ships)).toBe(true);
    expect(ships.at(0)).toBeDefined();
    expect(ships.at(0)).toMatchSnapshot({
      abs: 571252,
      active: false,
      class: 7604342,
      course_deg: null,
      home_port: "Port of Los Angeles",
      id: "5ea6ed2d080df4000697c901",
      image: "https://i.imgur.com/woCxpkj.jpg",
      imo: 7434016,
      last_ais_update: null,
      latitude: null,
      launches: ["5eb87cdeffd86e000604b330", "5eb87cdfffd86e000604b331"],
      legacy_id: "AMERICANCHAMPION",
      link: "https://www.marinetraffic.com/en/ais/details/ships/shipid:434663/mmsi:367020820/imo:7434016/vessel:AMERICAN_CHAMPION",
      longitude: null,
      mass_kg: 266712,
      mass_lbs: 588000,
      mmsi: 367020820,
      model: null,
      name: "American Champion",
      roles: ["Support Ship", "Barge Tug"],
      speed_kn: null,
      status: "",
      type: "Tug",
      year_built: 1976,
    });

    expect(ShipsSchema.safeParse(ships).success).toBe(true);
  });

  it("GET - /v4/ships/:id", async ({ expect }) => {
    const ship = await client("/v4/ships/:id", {
      id: "5ea6ed2d080df4000697c901",
    });

    expect(ship).toBeDefined();
    expect(ship).toMatchSnapshot({
      abs: 571252,
      active: false,
      class: 7604342,
      course_deg: null,
      home_port: "Port of Los Angeles",
      id: "5ea6ed2d080df4000697c901",
      image: "https://i.imgur.com/woCxpkj.jpg",
      imo: 7434016,
      last_ais_update: null,
      latitude: null,
      launches: ["5eb87cdeffd86e000604b330", "5eb87cdfffd86e000604b331"],
      legacy_id: "AMERICANCHAMPION",
      link: "https://www.marinetraffic.com/en/ais/details/ships/shipid:434663/mmsi:367020820/imo:7434016/vessel:AMERICAN_CHAMPION",
      longitude: null,
      mass_kg: 266712,
      mass_lbs: 588000,
      mmsi: 367020820,
      model: null,
      name: "American Champion",
      roles: ["Support Ship", "Barge Tug"],
      speed_kn: null,
      status: "",
      type: "Tug",
      year_built: 1976,
    });

    expect(ShipSchema.safeParse(ship).success).toBe(true);
  });
});
