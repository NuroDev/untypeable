import { describe, it, expect } from "vitest";

import { ShortUUIDSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - short", () => {
  const client = useTestClient({ json: false });

  it("GET - /s", async () => {
    const s = await client("/s");

    expect(s).toBeDefined();
    expect(s).toBeTypeOf("string");

    expect(ShortUUIDSchema.safeParse(s).success).toBe(true);
  });

  it("GET - /short", async () => {
    const short = await client("/short");

    expect(short).toBeDefined();
    expect(short).toBeTypeOf("string");

    expect(ShortUUIDSchema.safeParse(short).success).toBe(true);
  });

  // TODO: Add tests to check global parameters work as intended
});
