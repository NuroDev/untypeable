import { describe, it, expect } from "vitest";

import { LogSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("LogSnag - Log", () => {
  const client = useTestClient();

  it("POST - /log", async () => {
    const log = await client("/log", {
      project: "nuro",
      channel: "untypeable",
      event: "Test",
      description: "A basic test event from the `@untypeable/logsnag` package",
      icon: "👋",
      notify: false,
    });

    expect(log).toBeDefined();
    expect(log).toMatchSnapshot({
      project: "nuro",
      channel: "untypeable",
      event: "Test",
      description: "A basic test event from the `@untypeable/logsnag` package",
      icon: "👋",
      notify: false,
      parser: "text",
    });

    expect(LogSchema.safeParse(log).success).toBe(true);
  });
});
