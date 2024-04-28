import { describe, it, expect } from "vitest";

import { EmojiJsonSchema, EmojiSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("uuid.rocks - emoji", () => {
  it("GET - /api/uuid/emoji", async () => {
    const client = useTestClient({ json: false });

    const emoji = await client("/api/uuid/emoji");

    expect(emoji).toBeDefined();
    expect(emoji).toBeTypeOf("string");

    expect(EmojiSchema.safeParse(emoji).success).toBe(true);
  });

  it("GET - /api/uuid/emoji?json", async () => {
    const client = useTestClient({ json: true });

    const emojiJson = await client("/api/uuid/emoji?json");

    expect(emojiJson).toBeDefined();
    expect(emojiJson.apiVersion).toBeDefined();
    expect(emojiJson.apiVersion).toBeTypeOf("string");
    expect(emojiJson.timestamp).toBeDefined();
    expect(emojiJson.timestamp).toBeTypeOf("string");
    expect(emojiJson.uuid).toBeDefined();
    expect(emojiJson.uuid).toBeTypeOf("string");

    expect(EmojiJsonSchema.safeParse(emojiJson).success).toBe(true);
  });
});
