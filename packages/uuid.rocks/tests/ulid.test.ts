import { describe, it, expect } from "vitest";

import { ULIDSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - ulid", () => {
  const client = useTestClient({ json: false });

  it("GET - /ulid", async () => {
    const ulid = await client("/ulid");

    expect(ulid).toBeDefined();
    expect(ulid).toBeTypeOf("string");

    expect(ULIDSchema.safeParse(ulid).success).toBe(true);
  });
});
