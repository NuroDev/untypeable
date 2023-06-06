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
    expect(ships.at(0)).toMatchSnapshot();

    expect(ShipsSchema.safeParse(ships).success).toBe(true);
  });

  it("GET - /v4/ships/:id", async ({ expect }) => {
    const ship = await client("/v4/ships/:id", {
      id: "5ea6ed2d080df4000697c901",
    });

    expect(ship).toBeDefined();
    expect(ship).toMatchSnapshot();

    expect(ShipSchema.safeParse(ship).success).toBe(true);
  });
});
