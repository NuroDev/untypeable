import type { z } from "zod";

import type {
  CredentialsSchema,
  QueryParamsSchema,
  QueryResponseSchema,
  QueryResultSchema,
  QuerySchema,
  QueryTransactionSchema,
  StatementTransactionSchema,
} from "./query.validators";

export type Credentials = z.infer<typeof CredentialsSchema>;

export type QueryParams = z.infer<typeof QueryParamsSchema>;

export type QueryResponse = z.infer<typeof QueryResponseSchema>;

export type QueryResult = z.infer<typeof QueryResultSchema>;

export type Query = z.infer<typeof QuerySchema>;

export type QueryTransaction = z.infer<typeof QueryTransactionSchema>;

export type StatementTransaction = z.infer<typeof StatementTransactionSchema>;
