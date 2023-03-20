import { z } from "zod";

export const CommentSchema = z.object({
  body: z.string(),
  email: z.string().email(),
  id: z.number(),
  name: z.string(),
  postId: z.number(),
});

export const CommentsSchema = z.array(CommentSchema);

export const CommentParamsSchema = z.object({
  id: z.number(),
});

export const CommentsParamsSchema = CommentSchema.partial();
