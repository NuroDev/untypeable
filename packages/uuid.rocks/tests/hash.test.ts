import { describe, it, expect } from "vitest";

import { HashSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - hash", () => {
  it("GET - /api/hash/md5/Hello World", async () => {
    const client = useTestClient({ json: false });

    const hash = await client("/api/hash/:algo/:data", {
      algo: "md5",
      data: "Hello World",
    });

    expect(hash).toBeDefined();
    expect(hash).toBeTypeOf("string");

    expect(HashSchema.safeParse(hash).success).toBe(true);
  });

  it("GET - /api/hash/sha1/Hello World", async () => {
    const client = useTestClient({ json: false });

    const hash = await client("/api/hash/:algo/:data", {
      algo: "sha1",
      data: "Hello World",
    });

    expect(hash).toBeDefined();
    expect(hash).toBeTypeOf("string");

    expect(HashSchema.safeParse(hash).success).toBe(true);
  });

  it("GET - /api/hash/sha256/Hello World", async () => {
    const client = useTestClient({ json: false });

    const hash = await client("/api/hash/:algo/:data", {
      algo: "sha256",
      data: "Hello World",
    });

    expect(hash).toBeDefined();
    expect(hash).toBeTypeOf("string");

    expect(HashSchema.safeParse(hash).success).toBe(true);
  });
});
