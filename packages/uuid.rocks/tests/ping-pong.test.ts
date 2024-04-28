import { describe, it, expect } from "vitest";

import { PingPongJsonSchema, PingPongSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - ping pong", () => {
  it("GET - /api/ping", async () => {
    const client = useTestClient({ json: false });

    const pingPong = await client("/api/ping");

    expect(pingPong).toBeDefined();
    expect(pingPong).toBeTypeOf("string");

    expect(PingPongSchema.safeParse(pingPong).success).toBe(true);
  });

  it("GET - /api/ping?json", async () => {
    const client = useTestClient({ json: true });

    const pingPongJson = await client("/api/ping?json");

    expect(pingPongJson).toBeDefined();
    expect(pingPongJson.country).toBeDefined();
    expect(pingPongJson.country).toBeTypeOf("string");
    expect(pingPongJson.ip).toBeDefined();
    expect(pingPongJson.ip).toBeTypeOf("string");
    expect(pingPongJson.ping).toBeDefined();
    expect(pingPongJson.ping).toBeTypeOf("string");

    expect(PingPongJsonSchema.safeParse(pingPongJson).success).toBe(true);
  });
});
