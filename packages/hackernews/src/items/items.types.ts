import type { z } from "zod";

import type {
  AskSchema,
  CommentSchema,
  ItemParamsSchema,
  ItemSchema,
  JobSchema,
  PollOptSchema,
  PollSchema,
  StorySchema,
} from "./items.validators";

export type Ask = z.infer<typeof AskSchema>;

export type Comment = z.infer<typeof CommentSchema>;

export type ItemParams = z.infer<typeof ItemParamsSchema>;

export type Item = z.infer<typeof ItemSchema>;

export type Job = z.infer<typeof JobSchema>;

export type PollOpt = z.infer<typeof PollOptSchema>;

export type Poll = z.infer<typeof PollSchema>;

export type Story = z.infer<typeof StorySchema>;
