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
    expect(historyEvents.at(0)).toMatchSnapshot({
      details:
        "Falcon 1 becomes the first privately developed liquid-fuel rocket to reach Earth orbit.",
      event_date_unix: 1222643700,
      event_date_utc: "2008-09-28T23:15:00Z",
      id: "5f6fb2cfdcfdf403df37971e",
      links: {
        article:
          "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
      },
      title: "Falcon reaches Earth orbit",
    });

    expect(HistoryEventsSchema.safeParse(historyEvents).success).toBe(true);
  });

  it("GET - /v4/history/:id", async ({ expect }) => {
    const historyEvent = await client("/v4/history/:id", {
      id: "5f6fb2cfdcfdf403df37971e",
    });

    expect(historyEvent).toBeDefined();
    expect(historyEvent).toMatchSnapshot({
      details:
        "Falcon 1 becomes the first privately developed liquid-fuel rocket to reach Earth orbit.",
      event_date_unix: 1222643700,
      event_date_utc: "2008-09-28T23:15:00Z",
      id: "5f6fb2cfdcfdf403df37971e",
      links: {
        article:
          "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
      },
      title: "Falcon reaches Earth orbit",
    });

    expect(HistoryEventSchema.safeParse(historyEvent).success).toBe(true);
  });
});
