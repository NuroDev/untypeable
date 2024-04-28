import { describe, it, expect } from "vitest";

import { NewsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("lil APIs - News", () => {
  const client = useTestClient();

  it("GET - /news", async () => {
    const news = await client("/news");

    expect(news).toBeDefined();
    expect(news.articles).toBeDefined();
    expect(Array.isArray(news.articles)).toBe(true);

    expect(NewsSchema.safeParse(news).success).toBe(true);
  });
});
