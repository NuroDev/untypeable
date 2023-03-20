import { z } from "zod";

export const AlbumSchema = z.object({
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export const AlbumsSchema = z.array(AlbumSchema);

export const AlbumParamsSchema = z.object({
  id: z.number(),
});

export const AlbumsParamsSchema = AlbumSchema.partial();

export const CreatedAlbumSchema = AlbumSchema.omit({ id: true })
  .partial()
  .and(AlbumParamsSchema);

export const CreatedAlbumParamsSchema = AlbumSchema.omit({
  id: true,
}).partial();
