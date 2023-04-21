import { initUntypeable } from "untypeable";

import type { Api } from "./api/api.types";

const u = initUntypeable();

const router = u.router({
  "/api": u.output<Api>(),
});

export type RandomUserRouter = typeof router;

export * from "./api/api.types";
