import { describe, it } from "vitest";

import { PayloadSchema, PayloadsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Payloads", () => {
  const client = useTestClient();

  it("GET - /v4/payloads", async ({ expect }) => {
    const payloads = await client("/v4/payloads");

    expect(payloads).toBeDefined();
    expect(Array.isArray(payloads)).toBe(true);
    expect(payloads.at(0)).toBeDefined();
    expect(payloads.at(0)).toMatchSnapshot();

    expect(PayloadsSchema.safeParse(payloads).success).toBe(true);
  });

  it("GET - /v4/payloads/:id", async ({ expect }) => {
    const payload = await client("/v4/payloads/:id", {
      id: "5eb0e4b5b6c3bb0006eeb1e1",
    });

    expect(payload).toBeDefined();
    expect(payload).toMatchSnapshot();

    expect(PayloadSchema.safeParse(payload).success).toBe(true);
  });
});
