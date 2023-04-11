import { initUntypeable } from "untypeable";

import type { Item, ItemParams } from "./items/items.types";

const u = initUntypeable();

const router = u.router({
  "/v0/item/:id.json": u.input<ItemParams>().output<Item>(),
});

export type HackerNewsRouter = typeof router;

export * from "./items/items.types";
