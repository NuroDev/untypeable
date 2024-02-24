import { initUntypeable } from "untypeable";

import { ItemSchema, ItemParamsSchema } from "./items/items.validators";
import {
  AskStoriesSchema,
  BestStoriesSchema,
  JobStoriesSchema,
  LiveDataParamsSchema,
  MaxItemIdSchema,
  NewStoriesSchema,
  ShowStoriesSchema,
  TopStoriesSchema,
  UpdatesSchema,
} from "./liveData/liveData.validators";
import { UserSchema, UserParamsSchema } from "./users/users.validators";

const u = initUntypeable();

export const hackerNewsSafeRouter = u.router({
  "/v0/askstories.json": u.input(LiveDataParamsSchema).output(AskStoriesSchema),
  "/v0/beststories.json": u
    .input(LiveDataParamsSchema)
    .output(BestStoriesSchema),
  "/v0/item/:id.json": u.input(ItemParamsSchema).output(ItemSchema),
  "/v0/jobstories.json": u.input(LiveDataParamsSchema).output(JobStoriesSchema),
  "/v0/maxitem.json": u.input(LiveDataParamsSchema).output(MaxItemIdSchema),
  "/v0/newstories.json": u.input(LiveDataParamsSchema).output(NewStoriesSchema),
  "/v0/showstories.json": u
    .input(LiveDataParamsSchema)
    .output(ShowStoriesSchema),
  "/v0/topstories.json": u.input(LiveDataParamsSchema).output(TopStoriesSchema),
  "/v0/updates.json": u.input(LiveDataParamsSchema).output(UpdatesSchema),
  "/v0/user/:id.json": u.input(UserParamsSchema).output(UserSchema),
});
