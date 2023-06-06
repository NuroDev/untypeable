import { describe, it } from "vitest";

import {
  AskSchema,
  CommentSchema,
  JobSchema,
  PollSchema,
  PollOptSchema,
  StorySchema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("Hacker News - Items", () => {
  const client = useTestClient();

  it("GET - Story - /v0/item/8863.json", async ({ expect }) => {
    const story = await client("/v0/item/:id.json", {
      id: 8863,
    });

    expect(story).toBeDefined();
    expect(story).toMatchSnapshot();
    expect(StorySchema.safeParse(story).success).toBe(true);
  });

  it("GET - Comment - /v0/item/2921983.json", async ({ expect }) => {
    const comment = await client("/v0/item/:id.json", {
      id: 2921983,
    });

    expect(comment).toBeDefined();
    expect(comment).toMatchSnapshot();
    expect(CommentSchema.safeParse(comment).success).toBe(true);
  });

  it("GET - Ask - /v0/item/121003.json", async ({ expect }) => {
    const ask = await client("/v0/item/:id.json", {
      id: 121003,
    });

    expect(ask).toBeDefined();
    expect(ask).toMatchSnapshot();
    expect(AskSchema.safeParse(ask).success).toBe(true);
  });

  it("GET - Job - /v0/item/192327.json", async ({ expect }) => {
    const job = await client("/v0/item/:id.json", {
      id: 192327,
    });

    expect(job).toBeDefined();
    expect(job).toMatchSnapshot();
    expect(JobSchema.safeParse(job).success).toBe(true);
  });

  it("GET - Poll - /v0/item/126809.json", async ({ expect }) => {
    const poll = await client("/v0/item/:id.json", {
      id: 126809,
    });

    expect(poll).toBeDefined();
    expect(poll).toMatchSnapshot();
    expect(PollSchema.safeParse(poll).success).toBe(true);
  });

  it("GET - Poll Option - /v0/item/160705.json", async ({ expect }) => {
    const pollOpt = await client("/v0/item/:id.json", {
      id: 160705,
    });

    expect(pollOpt).toBeDefined();
    expect(pollOpt).toMatchSnapshot();
    expect(PollOptSchema.safeParse(pollOpt).success).toBe(true);
  });
});
