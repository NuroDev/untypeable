import { describe, it } from "vitest";

import { InsightSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("LogSnag - Insight", () => {
  const client = useTestClient();

  it("POST - /log", async ({ expect }) => {
    const insight = await client("/insight", {
      project: "nuro",
      icon: "📈",
      title: "Test",
      value: 100,
    });

    expect(insight).toBeDefined();
    expect(insight).toMatchSnapshot();

    expect(InsightSchema.safeParse(insight).success).toBe(true);
  });
});
