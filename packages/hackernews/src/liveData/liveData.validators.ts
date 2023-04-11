import { z } from "zod";

import { SharedOptionsSchema } from "../_shared/_shared.validators";

export const MaxItemIdSchema = z.number().int().positive();

const StorySchema = z.array(z.number().int().positive());
export const AskStoriesSchema = StorySchema;
export const BestStoriesSchema = StorySchema;
export const JobStoriesSchema = StorySchema;
export const NewStoriesSchema = StorySchema;
export const ShowStoriesSchema = StorySchema;
export const TopStoriesSchema = StorySchema;

export const UpdatesSchema = z.object({
  items: z.array(z.number().int().positive()),
  profiles: z.array(z.string()),
});

export const LiveDataParamsSchema = SharedOptionsSchema.partial();
