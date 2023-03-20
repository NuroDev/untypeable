import { z } from "zod";

export const PhotoSchema = z.object({
  albumId: z.number(),
  id: z.number(),
  thumbnailUrl: z.string().url(),
  title: z.string(),
  url: z.string().url(),
});

export const PhotosSchema = z.array(PhotoSchema);

export const PhotoParamsSchema = z.object({
  id: z.number(),
});

export const PhotosParamsSchema = PhotoSchema.partial();

export const CreatedPhotoSchema = PhotoSchema.omit({ id: true })
  .partial()
  .and(PhotoParamsSchema);

export const CreatedPhotoParamsSchema = PhotoSchema.omit({
  id: true,
}).partial();
