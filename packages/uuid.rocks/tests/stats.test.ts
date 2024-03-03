import { describe, it, expect } from "vitest";

import { StatsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - stats", () => {
  const client = useTestClient();

  it("GET - /stats", async () => {
    const stats = await client("/stats");

    expect(stats).toBeDefined();
    expect(stats.stats_viewed_count).toBeDefined();
    expect(stats.uuids_generated).toBeTypeOf("number");
    expect(stats.uuids_generated).toBeDefined();
    expect(stats.uuids_generated).toBeTypeOf("number");

    expect(StatsSchema.safeParse(stats).success).toBe(true);
  });
});
