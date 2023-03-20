import { describe, it, expect } from "vitest";

import { AlbumSchema, AlbumsSchema, CommentsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("JSONPlaceholder - Album", () => {
  const client = useTestClient();

  it("GET - /albums", async () => {
    const albums = await client("/albums", "GET");

    expect(albums).toBeDefined();
    expect(Array.isArray(albums)).toBe(true);
    expect(albums.at(0)).toBeDefined();
    expect(albums.at(0)?.id).toBeDefined();
    expect(albums.at(0)?.id).toBeTypeOf("number");
    expect(albums.at(0)?.title).toBeDefined();
    expect(albums.at(0)?.title).toBeTypeOf("string");
    expect(albums.at(0)?.userId).toBeDefined();
    expect(albums.at(0)?.userId).toBeTypeOf("number");

    expect(AlbumsSchema.safeParse(albums).success).toBe(true);
  });

  it("GET - /albums/:id", async () => {
    const album = await client("/albums/:id", "GET", {
      id: 1,
    });

    expect(album).toBeDefined();
    expect(album.id).toBeDefined();
    expect(album.id).toBeTypeOf("number");
    expect(album.title).toBeDefined();
    expect(album.title).toBeTypeOf("string");
    expect(album.userId).toBeDefined();
    expect(album.userId).toBeTypeOf("number");

    expect(AlbumSchema.safeParse(album).success).toBe(true);
  });

  it("GET - /albums/:id/comments", async () => {
    const comments = await client("/albums/:id/comments", "GET", {
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
