import { describe, it } from "vitest";

import { RootSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Root", () => {
  const client = useTestClient();

  it("GET - /", async ({ expect }) => {
    const root = await client("/");

    expect(root).toBeDefined();
    expect(root).toMatchSnapshot();

    expect(RootSchema.safeParse(root).success).toBe(true);
  });
});
