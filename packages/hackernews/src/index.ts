import { initUntypeable } from "untypeable";

import type { Item, ItemParams } from "./items/items.types";
import type {
  AskStories,
  BestStories,
  JobStories,
  LiveDataParams,
  MaxItemId,
  NewStories,
  ShowStories,
  TopStories,
  Updates,
} from "./liveData/liveData.types";
import type { User, UserParams } from "./users/users.types";

const u = initUntypeable();

const router = u.router({
  "/v0/askstories.json": u.input<LiveDataParams>().output<AskStories>(),
  "/v0/beststories.json": u.input<LiveDataParams>().output<BestStories>(),
  "/v0/item/:id.json": u.input<ItemParams>().output<Item>(),
  "/v0/jobstories.json": u.input<LiveDataParams>().output<JobStories>(),
  "/v0/maxitem.json": u.input<LiveDataParams>().output<MaxItemId>(),
  "/v0/newstories.json": u.input<LiveDataParams>().output<NewStories>(),
  "/v0/showstories.json": u.input<LiveDataParams>().output<ShowStories>(),
  "/v0/topstories.json": u.input<LiveDataParams>().output<TopStories>(),
  "/v0/updates.json": u.input<LiveDataParams>().output<Updates>(),
  "/v0/user/:id.json": u.input<UserParams>().output<User>(),
});

export type HackerNewsRouter = typeof router;
