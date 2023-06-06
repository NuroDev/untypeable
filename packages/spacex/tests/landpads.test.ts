import { describe, it } from "vitest";

import { LandPadSchema, LandPadsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Land Pads", () => {
  const client = useTestClient();

  it("GET - /v4/landpads", async ({ expect }) => {
    const landPads = await client("/v4/landpads");

    expect(landPads).toBeDefined();
    expect(Array.isArray(landPads)).toBe(true);
    expect(landPads.at(0)).toBeDefined();
    expect(landPads.at(0)).toMatchSnapshot();

    expect(LandPadsSchema.safeParse(landPads).success).toBe(true);
  });

  it("GET - /v4/landpads/:id", async ({ expect }) => {
    const landPad = await client("/v4/landpads/:id", {
      id: "5e9e3032383ecb267a34e7c7",
    });

    expect(landPad).toBeDefined();
    expect(landPad).toMatchSnapshot();

    expect(LandPadSchema.safeParse(landPad).success).toBe(true);
  });
});
