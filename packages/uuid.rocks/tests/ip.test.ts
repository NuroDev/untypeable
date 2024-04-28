import { describe, it, expect } from "vitest";

import { IpJsonSchema, IpSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - ip address", () => {
  it("GET - /api/ip", async () => {
    const client = useTestClient({ json: false });

    const ipAddress = await client("/api/ip");

    expect(ipAddress).toBeDefined();
    expect(ipAddress).toBeTypeOf("string");

    expect(IpSchema.safeParse(ipAddress).success).toBe(true);
  });

  it("GET - /api/ip?json", async () => {
    const client = useTestClient({ json: true });

    const ipAddressJson = await client("/api/ip?json");

    expect(ipAddressJson).toBeDefined();
    expect(ipAddressJson.country).toBeDefined();
    expect(ipAddressJson.country).toBeTypeOf("string");
    expect(ipAddressJson.ip).toBeDefined();
    expect(ipAddressJson.ip).toBeTypeOf("string");

    expect(IpJsonSchema.safeParse(ipAddressJson).success).toBe(true);
  });
});
