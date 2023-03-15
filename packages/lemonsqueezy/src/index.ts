import { initUntypeable } from "untypeable";

import type { User } from "./user";

const u = initUntypeable();

const router = u.router({
  "/users/me": u.output<User>(),
});

export type LemonSqueezyRouter = typeof router;

export { DataType } from "./_shared";
