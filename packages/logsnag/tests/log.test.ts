import { describe, it } from "vitest";

import { LogSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("LogSnag - Log", () => {
  const client = useTestClient();

  it("POST - /log", async ({ expect }) => {
    const log = await client("/log", {
      project: "nuro",
      channel: "untypeable",
      event: "Test",
      description: "A basic test event from the `@untypeable/logsnag` package",
      icon: "👋",
      notify: false,
    });

    expect(log).toBeDefined();
    expect(log).toMatchSnapshot();

    expect(LogSchema.safeParse(log).success).toBe(true);
  });
});
