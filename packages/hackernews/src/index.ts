import { initUntypeable } from "untypeable";

import type { Item, ItemParams } from "./items/items.types";
import type {
  AskStories,
  BestStories,
  JobStories,
  MaxItemId,
  NewStories,
  ShowStories,
  TopStories,
  Updates,
} from "./liveData/liveData.types";
import type { User, UserParams } from "./users/users.types";

const u = initUntypeable();

const router = u.router({
  "/v0/askstories.json": u.output<AskStories>(),
  "/v0/beststories.json": u.output<BestStories>(),
  "/v0/item/:id.json": u.input<ItemParams>().output<Item>(),
  "/v0/jobstories.json": u.output<JobStories>(),
  "/v0/maxitem.json": u.output<MaxItemId>(),
  "/v0/newstories.json": u.output<NewStories>(),
  "/v0/showstories.json": u.output<ShowStories>(),
  "/v0/topstories.json": u.output<TopStories>(),
  "/v0/updates.json": u.output<Updates>(),
  "/v0/user/:id.json": u.input<UserParams>().output<User>(),
});

export type HackerNewsRouter = typeof router;

export * from "./items/items.types";
export * from "./liveData/liveData.types";
export * from "./users/users.types";
