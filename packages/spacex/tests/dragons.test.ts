import { describe, it } from "vitest";

import { DragonSchema, DragonsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Dragons", () => {
  const client = useTestClient();

  it("GET - /v4/dragons", async ({ expect }) => {
    const dragons = await client("/v4/dragons");

    expect(dragons).toBeDefined();
    expect(Array.isArray(dragons)).toBe(true);
    expect(dragons.at(0)).toBeDefined();
    expect(dragons.at(0)).toMatchSnapshot();

    expect(DragonsSchema.safeParse(dragons).success).toBe(true);
  });

  it("GET - /v4/capsules/:id", async ({ expect }) => {
    const dragon = await client("/v4/dragons/:id", {
      id: "5e9d058759b1ff74a7ad5f8f",
    });

    expect(dragon).toBeDefined();
    expect(dragon).toMatchSnapshot();

    expect(DragonSchema.safeParse(dragon).success).toBe(true);
  });
});
