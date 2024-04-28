import { describe, it, expect } from "vitest";

import { JsonBulkSchema, JsonMapSchema, JsonSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - json", () => {
  const client = useTestClient();

  it("GET - /json", async () => {
    const json = await client("/json");

    expect(json).toBeDefined();
    expect(json.apiVersion).toBeDefined();
    expect(json.apiVersion).toBeTypeOf("string");
    expect(json.apiVersion.startsWith("v")).toBe(true);
    expect(json.is_readable_uuid).toBe(false);
    expect(json.is_short_uuid).toBe(false);
    expect(json.is_ulid).toBe(false);
    expect(json.timestamp).toBeDefined();
    expect(json.timestamp).toBeTypeOf("string");
    expect(json.uuid).toBeDefined();
    expect(json.uuid).toBeTypeOf("string");

    expect(JsonSchema.safeParse(json).success).toBe(true);
  });

  it("GET - /json/bulk", async () => {
    const count = 2;
    const jsonBulk = await client("/json/bulk", { count });

    expect(jsonBulk).toBeDefined();
    expect(jsonBulk.apiVersion).toBeDefined();
    expect(jsonBulk.apiVersion).toBeTypeOf("string");
    expect(jsonBulk.apiVersion.startsWith("v")).toBe(true);
    expect(jsonBulk.is_readable_uuid).toBe(false);
    expect(jsonBulk.timestamp).toBeDefined();
    expect(jsonBulk.timestamp).toBeTypeOf("string");
    expect(jsonBulk.uuids).toBeDefined();
    expect(jsonBulk.uuids).toBeTypeOf("object");
    expect(Array.isArray(jsonBulk.uuids)).toBe(true);
    expect(jsonBulk.uuids).toHaveLength(count);

    expect(JsonBulkSchema.safeParse(jsonBulk).success).toBe(true);
  });

  it("GET - /json/map/:key", async () => {
    const jsonMap = await client("/json/map/:key", { key: "foobar" });

    expect(jsonMap).toBeDefined();
    expect(jsonMap.apiVersion).toBeDefined();
    expect(jsonMap.apiVersion).toBeTypeOf("string");
    expect(jsonMap.apiVersion.startsWith("v")).toBe(true);
    expect(jsonMap.created_at).toBeDefined();
    expect(jsonMap.created_at).toBeTypeOf("string");
    expect(jsonMap.message).toBeDefined();
    expect(jsonMap.message).toBeTypeOf("string");
    expect(jsonMap.timestamp).toBeDefined();
    expect(jsonMap.timestamp).toBeTypeOf("string");
    expect(jsonMap.uuid).toBeDefined();
    expect(jsonMap.uuid).toBeTypeOf("string");

    expect(JsonMapSchema.safeParse(jsonMap).success).toBe(true);
  });
});
