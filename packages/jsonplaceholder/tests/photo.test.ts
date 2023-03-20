import { describe, it, expect } from "vitest";

import { CommentsSchema, PhotoSchema, PhotosSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("JSONPlaceholder - Photo", () => {
  const client = useTestClient();

  it("GET - /photos", async () => {
    const photos = await client("/photos", "GET");

    expect(photos).toBeDefined();
    expect(Array.isArray(photos)).toBe(true);
    expect(photos.at(0)).toBeDefined();
    expect(photos.at(0)?.albumId).toBeDefined();
    expect(photos.at(0)?.albumId).toBeTypeOf("number");
    expect(photos.at(0)?.id).toBeDefined();
    expect(photos.at(0)?.id).toBeTypeOf("number");
    expect(photos.at(0)?.thumbnailUrl).toBeDefined();
    expect(photos.at(0)?.thumbnailUrl).toBeTypeOf("string");
    expect(photos.at(0)?.title).toBeDefined();
    expect(photos.at(0)?.title).toBeTypeOf("string");
    expect(photos.at(0)?.url).toBeDefined();
    expect(photos.at(0)?.url).toBeTypeOf("string");

    expect(PhotosSchema.safeParse(photos).success).toBe(true);
  });

  it("GET - /photos/:id", async () => {
    const photo = await client("/photos/:id", "GET", {
      id: 1,
    });

    expect(photo).toBeDefined();
    expect(photo.albumId).toBeDefined();
    expect(photo.albumId).toBeTypeOf("number");
    expect(photo.id).toBeDefined();
    expect(photo.id).toBeTypeOf("number");
    expect(photo.thumbnailUrl).toBeDefined();
    expect(photo.thumbnailUrl).toBeTypeOf("string");
    expect(photo.title).toBeDefined();
    expect(photo.title).toBeTypeOf("string");
    expect(photo.url).toBeDefined();
    expect(photo.url).toBeTypeOf("string");

    expect(PhotoSchema.safeParse(photo).success).toBe(true);
  });

  it("GET - /photos/:id/comments", async () => {
    const comments = await client("/photos/:id/comments", "GET", {
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
