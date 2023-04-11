import { initUntypeable } from "untypeable";

import type { Item, ItemParams } from "./items/items.types";
import type { User, UserParams } from "./users/users.types";

const u = initUntypeable();

const router = u.router({
  "/v0/item/:id.json": u.input<ItemParams>().output<Item>(),
  "/v0/user/:id.json": u.input<UserParams>().output<User>(),
});

export type HackerNewsRouter = typeof router;

export * from "./items/items.types";
export * from "./users/users.types";
