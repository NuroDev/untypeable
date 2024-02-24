import { initUntypeable } from "untypeable";

import { InsightSchema } from "./insight/insight.validators";
import { LogSchema } from "./log/log.validators";

const u = initUntypeable();

export const logSnagSafeRouter = u.router({
  "/insight": u.input(InsightSchema).output(InsightSchema),
  "/log": u.input(LogSchema).output(LogSchema),
});
