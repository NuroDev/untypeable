import { describe, it } from "vitest";

import { HistoryEventSchema, HistoryEventsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - History", () => {
  const client = useTestClient();

  it("GET - /v4/history", async ({ expect }) => {
    const historyEvents = await client("/v4/history");

    expect(historyEvents).toBeDefined();
    expect(Array.isArray(historyEvents)).toBe(true);
    expect(historyEvents.at(0)).toBeDefined();
    expect(historyEvents.at(0)).toMatchSnapshot();

    expect(HistoryEventsSchema.safeParse(historyEvents).success).toBe(true);
  });

  it("GET - /v4/history/:id", async ({ expect }) => {
    const historyEvent = await client("/v4/history/:id", {
      id: "5f6fb2cfdcfdf403df37971e",
    });

    expect(historyEvent).toBeDefined();
    expect(historyEvent).toMatchSnapshot();

    expect(HistoryEventSchema.safeParse(historyEvent).success).toBe(true);
  });
});
