import { initUntypeable } from "untypeable";

import type { QueryParams, QueryResponse } from "./query/query.types";

const u = initUntypeable();

const router = u.router({
  "/:id": u.input<QueryParams>().output<QueryResponse>(),
});

export type SqlitergRouter = typeof router;
