import type { z } from "zod";

import type {
  AlbumParamsSchema,
  AlbumSchema,
  AlbumsParamsSchema,
  AlbumsSchema,
} from "./album.validators";

export type Album = z.infer<typeof AlbumSchema>;

export type Albums = z.infer<typeof AlbumsSchema>;

export type AlbumParams = z.infer<typeof AlbumParamsSchema>;

export type AlbumsParams = z.infer<typeof AlbumsParamsSchema>;
