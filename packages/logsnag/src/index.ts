import { initUntypeable } from "untypeable";

import type { Insight } from "./insight.types";
import type { Log } from "./log.types";

const u = initUntypeable();

const router = u.router({
  "/insight": u.input<Insight>().output<Insight>(),
  "/log": u.input<Log>().output<Log>(),
});

export type LogSnagRouter = typeof router;
