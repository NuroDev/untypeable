import type { z } from "zod";

import type {
  MaxItemIdSchema,
  AskStoriesSchema,
  BestStoriesSchema,
  JobStoriesSchema,
  NewStoriesSchema,
  ShowStoriesSchema,
  TopStoriesSchema,
  UpdatesSchema,
} from "./liveData.validators";

export type MaxItemId = z.infer<typeof MaxItemIdSchema>;

export type AskStories = z.infer<typeof AskStoriesSchema>;

export type BestStories = z.infer<typeof BestStoriesSchema>;

export type JobStories = z.infer<typeof JobStoriesSchema>;

export type NewStories = z.infer<typeof NewStoriesSchema>;

export type ShowStories = z.infer<typeof ShowStoriesSchema>;

export type TopStories = z.infer<typeof TopStoriesSchema>;

export type Updates = z.infer<typeof UpdatesSchema>;
