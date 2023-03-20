import { initUntypeable } from "untypeable";

import type { Insight } from "./insight/insight.types";
import type { Log } from "./log/log.types";

const u = initUntypeable();

const router = u.router({
  "/insight": u.input<Insight>().output<Insight>(),
  "/log": u.input<Log>().output<Log>(),
});

export type LogSnagRouter = typeof router;

export type { Log } from "./log/log.types";
export type { Insight } from "./insight/insight.types";
