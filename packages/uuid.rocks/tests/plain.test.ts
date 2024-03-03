import { describe, it, expect } from "vitest";

import { PlainBulkSchema, PlainMapSchema, PlainSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - plain", () => {
  const client = useTestClient({ json: false });

  it("GET - /plain", async () => {
    const plain = await client("/plain");

    expect(plain).toBeDefined();
    expect(plain).toBeTypeOf("string");

    expect(PlainSchema.safeParse(plain).success).toBe(true);
  });

  it("GET - /plain/bulk", async () => {
    const count = 2;
    const plainBulk = await client("/plain/bulk", { count });

    expect(plainBulk).toBeDefined();
    expect(plainBulk).toBeTypeOf("string");
    expect(
      plainBulk
        .split("")
        .reduce((acc, char) => (char === "\n" ? acc + 1 : acc), 0)
    ).toBe(count - 1);

    expect(PlainBulkSchema.safeParse(plainBulk).success).toBe(true);
  });

  it("GET - /plain/map/:key", async () => {
    const plainMap = await client("/plain/map/:key", { key: "foo" });

    expect(plainMap).toBeDefined();
    expect(plainMap).toBeTypeOf("string");

    expect(PlainMapSchema.safeParse(plainMap).success).toBe(true);
  });

  // TODO: Add tests to check global parameters work as intended
});
