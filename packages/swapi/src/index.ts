import { initUntypeable } from "untypeable";

import type { Root } from "./root.types";

const u = initUntypeable();

const router = u.router({
  "/": u.output<Root>(),
});

export type SwapiRouter = typeof router;
