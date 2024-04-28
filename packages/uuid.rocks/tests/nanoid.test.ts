import { describe, it, expect } from "vitest";

import { NanoIDSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - nanoid", () => {
  const client = useTestClient({ json: false });

  it("GET - /nanoid", async () => {
    const nanoid = await client("/nanoid");

    expect(nanoid).toBeDefined();
    expect(nanoid).toBeTypeOf("string");

    expect(NanoIDSchema.safeParse(nanoid).success).toBe(true);
  });
});
