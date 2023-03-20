import { describe, it, expect } from "vitest";

import { PostSchema, PostsSchema, CommentsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("JSONPlaceholder - Post", () => {
  const client = useTestClient();

  it("GET - /posts", async () => {
    const posts = await client("/posts", "GET");

    expect(posts).toBeDefined();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.at(0)).toBeDefined();
    expect(posts.at(0)?.body).toBeDefined();
    expect(posts.at(0)?.body).toBeTypeOf("string");
    expect(posts.at(0)?.id).toBeDefined();
    expect(posts.at(0)?.id).toBeTypeOf("number");
    expect(posts.at(0)?.title).toBeDefined();
    expect(posts.at(0)?.title).toBeTypeOf("string");
    expect(posts.at(0)?.userId).toBeDefined();
    expect(posts.at(0)?.userId).toBeTypeOf("number");

    expect(PostsSchema.safeParse(posts).success).toBe(true);
  });

  it("GET - /posts/:id", async () => {
    const post = await client("/posts/:id", "GET", {
      id: 1,
    });

    expect(post).toBeDefined();
    expect(post.body).toBeDefined();
    expect(post.body).toBeTypeOf("string");
    expect(post.id).toBeDefined();
    expect(post.id).toBeTypeOf("number");
    expect(post.title).toBeDefined();
    expect(post.title).toBeTypeOf("string");
    expect(post.userId).toBeDefined();
    expect(post.userId).toBeTypeOf("number");

    expect(PostSchema.safeParse(post).success).toBe(true);
  });

  it("GET - /posts/:id/comments", async () => {
    const comments = await client("/posts/:id/comments", "GET", {
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
