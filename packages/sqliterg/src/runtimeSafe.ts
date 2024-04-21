import { initUntypeable } from "untypeable";

import { QueryParamsSchema, QueryResponseSchema } from "./zod";

const u = initUntypeable();

export const sqlitergSafeRouter = u.router({
  "/:id": u.input(QueryParamsSchema).output(QueryResponseSchema),
});
