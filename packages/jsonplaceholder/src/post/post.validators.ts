import { z } from "zod";

export const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const PostsSchema = z.array(PostSchema);

export const PostParamsSchema = z.object({
  id: z.number(),
});

export const PostsParamsSchema = PostSchema.partial();

export const CreatedPostSchema = PostSchema.omit({ id: true })
  .partial()
  .and(PostParamsSchema);

export const CreatedPostParamsSchema = PostSchema.omit({
  id: true,
}).partial();
