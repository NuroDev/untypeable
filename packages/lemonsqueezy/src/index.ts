import { initUntypeable } from "untypeable";

import type { LemonSqueezyUser } from "./user";

const u = initUntypeable();

const router = u.router({
  "/users/me": u.output<LemonSqueezyUser>(),
});

export type LemonSqueezyRouter = typeof router;

export { LemonsqueezyDataType } from "./_shared";
