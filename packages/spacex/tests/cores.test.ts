import { describe, it } from "vitest";

import { CoreSchema, CoresSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Cores", () => {
  const client = useTestClient();

  it("GET - /v4/cores", async ({ expect }) => {
    const cores = await client("/v4/cores");

    expect(cores).toBeDefined();
    expect(Array.isArray(cores)).toBe(true);
    expect(cores.at(0)).toBeDefined();
    expect(cores.at(0)).toMatchSnapshot();

    expect(CoresSchema.safeParse(cores).success).toBe(true);
  });

  it("GET - /v4/cores/:id", async ({ expect }) => {
    const core = await client("/v4/cores/:id", {
      id: "5e9e289df35918033d3b2623",
    });

    expect(core).toBeDefined();
    expect(core).toMatchSnapshot();

    expect(CoreSchema.safeParse(core).success).toBe(true);
  });
});
