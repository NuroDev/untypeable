import { describe, it, expect } from "vitest";

import { NewsSchema } from "../src/zod";
import { useTestClient } from "../src/_shared.util";

describe.concurrent("lil APIs - News", () => {
  const client = useTestClient();

  it("GET - /news", async () => {
    const news = await client("/news");

    expect(news).toBeDefined();
    expect(news.articles).toBeDefined();
    expect(Array.isArray(news.articles)).toBe(true);
    expect(news.articles.at(0)).toBeDefined();
    expect(news.articles.at(0)?.description).toBeDefined();
    expect(news.articles.at(0)?.description).toBeTypeOf("string");
    expect(news.articles.at(0)?.title).toBeDefined();
    expect(news.articles.at(0)?.title).toBeTypeOf("string");
    expect(news.articles.at(0)?.url).toBeDefined();
    expect(news.articles.at(0)?.url).toBeTypeOf("string");

    expect(NewsSchema.safeParse(news).success).toBe(true);
  });
});
