import type { z } from "zod";

import type {
  CreatedPostParamsSchema,
  CreatedPostSchema,
  PostParamsSchema,
  PostSchema,
  PostsParamsSchema,
  PostsSchema,
} from "./post.validators";

export type Post = z.infer<typeof PostSchema>;

export type Posts = z.infer<typeof PostsSchema>;

export type PostParams = z.infer<typeof PostParamsSchema>;

export type PostsParams = z.infer<typeof PostsParamsSchema>;

export type CreatedPost = z.infer<typeof CreatedPostSchema>;

export type CreatedPostParams = z.infer<typeof CreatedPostParamsSchema>;
