import { describe, it } from "vitest";

import {
  AskStoriesSchema,
  BestStoriesSchema,
  JobStoriesSchema,
  MaxItemIdSchema,
  NewStoriesSchema,
  ShowStoriesSchema,
  TopStoriesSchema,
  UpdatesSchema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("Hacker News - Live Data", () => {
  const client = useTestClient();

  it("GET - Ask Stories - /v0/askstories.json", async ({ expect }) => {
    const askStories = await client("/v0/askstories.json");

    expect(askStories).toBeDefined();
    expect(Array.isArray(askStories)).toBe(true);
    expect(AskStoriesSchema.safeParse(askStories).success).toBe(true);
  });

  it("GET - Best Stories - /v0/beststories.json", async ({ expect }) => {
    const bestStories = await client("/v0/beststories.json");

    expect(bestStories).toBeDefined();
    expect(Array.isArray(bestStories)).toBe(true);
    expect(BestStoriesSchema.safeParse(bestStories).success).toBe(true);
  });

  it("GET - Job Stories - /v0/jobstories.json", async ({ expect }) => {
    const jobStories = await client("/v0/jobstories.json");

    expect(jobStories).toBeDefined();
    expect(Array.isArray(jobStories)).toBe(true);
    expect(JobStoriesSchema.safeParse(jobStories).success).toBe(true);
  });

  it("GET - New Stories - /v0/newstories.json", async ({ expect }) => {
    const newStories = await client("/v0/newstories.json");

    expect(newStories).toBeDefined();
    expect(Array.isArray(newStories)).toBe(true);
    expect(NewStoriesSchema.safeParse(newStories).success).toBe(true);
  });

  it("GET - Show Stories - /v0/showstories.json", async ({ expect }) => {
    const showStories = await client("/v0/showstories.json");

    expect(showStories).toBeDefined();
    expect(Array.isArray(showStories)).toBe(true);
    expect(ShowStoriesSchema.safeParse(showStories).success).toBe(true);
  });

  it("GET - Top Stories - /v0/topstories.json", async ({ expect }) => {
    const topStories = await client("/v0/topstories.json");

    expect(topStories).toBeDefined();
    expect(Array.isArray(topStories)).toBe(true);
    expect(TopStoriesSchema.safeParse(topStories).success).toBe(true);
  });

  it("GET - Updates - /v0/updates.json", async ({ expect }) => {
    const updates = await client("/v0/updates.json");

    expect(updates).toBeDefined();
    expect(UpdatesSchema.safeParse(updates).success).toBe(true);
  });

  it("GET - Max Item ID - /v0/maxitem.json", async ({ expect }) => {
    const maxItemId = await client("/v0/maxitem.json");

    expect(maxItemId).toBeDefined();
    expect(typeof maxItemId === "number").toBe(true);
    expect(MaxItemIdSchema.safeParse(maxItemId).success).toBe(true);
  });
});
