import { describe, it, expect } from "vitest";

import { CommentSchema, CommentsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("JSONPlaceholder - Comment", () => {
  const client = useTestClient();

  it("GET - /comments", async () => {
    const comments = await client("/comments", "GET");

    expect(comments).toBeDefined();
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.at(0)).toBeDefined();
    expect(comments.at(0)?.body).toBeDefined();
    expect(comments.at(0)?.body).toBeTypeOf("string");
    expect(comments.at(0)?.email).toBeDefined();
    expect(comments.at(0)?.email).toBeTypeOf("string");
    expect(comments.at(0)?.id).toBeDefined();
    expect(comments.at(0)?.id).toBeTypeOf("number");
    expect(comments.at(0)?.name).toBeDefined();
    expect(comments.at(0)?.name).toBeTypeOf("string");
    expect(comments.at(0)?.postId).toBeDefined();
    expect(comments.at(0)?.postId).toBeTypeOf("number");

    expect(CommentsSchema.safeParse(comments).success).toBe(true);
  });

  it("GET - /comments/:id", async () => {
    const comment = await client("/comments/:id", "GET", {
      id: 1,
    });

    expect(comment).toBeDefined();
    expect(comment.body).toBeDefined();
    expect(comment.body).toBeTypeOf("string");
    expect(comment.email).toBeDefined();
    expect(comment.email).toBeTypeOf("string");
    expect(comment.id).toBeDefined();
    expect(comment.id).toBeTypeOf("number");
    expect(comment.name).toBeDefined();
    expect(comment.name).toBeTypeOf("string");
    expect(comment.postId).toBeDefined();
    expect(comment.postId).toBeTypeOf("number");

    expect(CommentSchema.safeParse(comment).success).toBe(true);
  });

  it("GET - /comments/:id/comments", async () => {
    const comments = await client("/comments/:id/comments", "GET", {
      id: 1,
    });

    expect(comments).toBeDefined();
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.at(0)).toBeDefined();
    expect(comments.at(0)?.body).toBeDefined();
    expect(comments.at(0)?.body).toBeTypeOf("string");
    expect(comments.at(0)?.email).toBeDefined();
    expect(comments.at(0)?.email).toBeTypeOf("string");
    expect(comments.at(0)?.id).toBeDefined();
    expect(comments.at(0)?.id).toBeTypeOf("number");
    expect(comments.at(0)?.name).toBeDefined();
    expect(comments.at(0)?.name).toBeTypeOf("string");
    expect(comments.at(0)?.postId).toBeDefined();
    expect(comments.at(0)?.postId).toBeTypeOf("number");

    expect(CommentsSchema.safeParse(comments).success).toBe(true);
  });
});
