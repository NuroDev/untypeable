import type { z } from "zod";

import type {
  CommentParamsSchema,
  CommentSchema,
  CommentsParamsSchema,
  CommentsSchema,
  CreatedCommentParamsSchema,
  CreatedCommentSchema,
} from "./comment.validators";

export type Comment = z.infer<typeof CommentSchema>;

export type Comments = z.infer<typeof CommentsSchema>;

export type CommentParams = z.infer<typeof CommentParamsSchema>;

export type CommentsParams = z.infer<typeof CommentsParamsSchema>;

export type CreatedComment = z.infer<typeof CreatedCommentSchema>;

export type CreatedCommentParams = z.infer<typeof CreatedCommentParamsSchema>;
