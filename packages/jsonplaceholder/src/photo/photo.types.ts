import type { z } from "zod";

import type {
  PhotoParamsSchema,
  PhotosParamsSchema,
  PhotoSchema,
  PhotosSchema,
  CreatedPhotoSchema,
  CreatedPhotoParamsSchema,
} from "./photo.validators";

export type Photo = z.infer<typeof PhotoSchema>;

export type Photos = z.infer<typeof PhotosSchema>;

export type PhotoParams = z.infer<typeof PhotoParamsSchema>;

export type PhotosParams = z.infer<typeof PhotosParamsSchema>;

export type CreatedPhoto = z.infer<typeof CreatedPhotoSchema>;

export type CreatedPhotoParams = z.infer<typeof CreatedPhotoParamsSchema>;
