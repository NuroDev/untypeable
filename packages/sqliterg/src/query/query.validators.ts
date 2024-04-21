import { z } from "zod";

export const CredentialsSchema = z.object({
  user: z.string(),
  password: z.string(),
});

const NamedParameterValuesSchema = z.record(z.string(), z.unknown());

const PositionalParameterValuesSchema = z.array(z.unknown());

const QueryValuesSchema = z.union([
  NamedParameterValuesSchema,
  PositionalParameterValuesSchema,
]);

const QueryValuesUnionSchema = z.union([
  z.object({
    /**
     * It's not possible to specify both `values` and `valuesBatch`.
     */
    values: QueryValuesSchema.optional(),
    valuesBatch: z.undefined(),
  }),

  z.object({
    values: z.undefined(),
    /**
     * Only for `statement`s, more than one set of parameter values can be specified; the statement will be applied to them in a batch (by preparing the statement).
     *
     * It's not possible to specify both `values` and `valuesBatch`.
     */
    valuesBatch: z.array(QueryValuesSchema).optional(),
  }),
]);

const SharedTransactionSchema = z.object({
  /**
   * Dont' fail when errors occur.
   *
   * When a query/statement fails, by default the whole transaction is rolled back and a response with a single error is returned (the first one for the whole transaction).
   * Specifying this flag, the error will be reported for that statement, but the execution will continue and eventually be committed.
   * See the [relevant page](https://docs.sqliterg.dev/documentation/the-web-services/the-query-web-service/errors) for more details.
   */
  noFail: z.boolean().optional(),
});

export const QueryTransactionSchema = SharedTransactionSchema.extend({
  /**
   * The actual SQL to execute.
   *
   * Specifying it as `query` means that a result set is expected (typically, `SELECT` queries or queries with a `RETURNING` clause).
   *
   * @see https://docs.sqliterg.dev/documentation/the-web-services/the-query-web-service/requests#sql-statements-to-execute
   *
   * This can also consist of a reference to a Stored Query. They are prepended by a `^`.
   * An error will occour if the S.Q. with an ID equal to the part after the `^` was not defined for this database.
   *
   * @see https://docs.sqliterg.dev/documentation/configuration-file/stored-statements.
   */
  query: z.string(),
}).and(QueryValuesUnionSchema);

export const StatementTransactionSchema = SharedTransactionSchema.extend({
  /**
   * The actual SQL to execute.
   *
   * Specifying a `statement` will not return a result set, but a count of affected records.
   *
   * @see https://docs.sqliterg.dev/documentation/the-web-services/the-query-web-service/requests#sql-statements-to-execute
   *
   * This can also consist of a reference to a Stored Query. They are prepended by a `^`.
   * An error will occour if the S.Q. with an ID equal to the part after the `^` was not defined for this database.
   *
   * @see https://docs.sqliterg.dev/documentation/configuration-file/stored-statements.
   */
  statement: z.string(),
}).and(QueryValuesUnionSchema);

export const QuerySchema = z.object({
  /**
   * If authentication is enabled in `INLINE` mode, this object describes the credentials.
   *
   * @see https://docs.sqliterg.dev/documentation/the-web-services/authentication#credentials-in-the-request-inline-mode
   */
  credentials: CredentialsSchema.optional(),

  /**
   * The list of the queries or statements that will actually be performed on the database, with their own parameters.
   *
   * They will be run in a transaction, and the transaction will be committed only if all the queries that are not marked as noFail (see the [relevant section](https://docs.sqliterg.dev/documentation/the-web-services/the-query-web-service/errors)) do successfully complete.
   *
   * The transaction can be empty, in that case the database will be [locked and unlocked](https://docs.sqliterg.dev/advanced-topics#concurrency-or-lack-thereof) but nothing else will be done.
   */
  transaction: z.array(
    z.union([QueryTransactionSchema, StatementTransactionSchema])
  ),
});

export const QueryParamsSchema = QuerySchema.extend({
  /**
   * The ID of the database to query.
   */
  id: z.string(),
});

const RowsUpdateUnionSchema = z.union([
  z.object({
    rowsUpdated: z.number(),
  }),

  z.object({
    rowsUpdatedBatch: z.array(z.number()),
  }),
]);

export const QueryResultSchema = z.union([
  z
    .object({
      success: z.literal(true),
      resultSet: z.array(z.record(z.string(), z.string())),
      error: z.undefined(),
      rowsUpdated: z.number(),
    })
    .and(RowsUpdateUnionSchema),

  z
    .object({
      error: z.string(),
      resultSet: z.undefined(),
      rowsUpdated: z.undefined(),
      success: z.literal(false),
    })
    .and(RowsUpdateUnionSchema),
]);

export const QueryResponseSchema = z.object({
  /**
   * @see https://docs.sqliterg.dev/documentation/the-web-services/the-query-web-service/responses
   */
  results: z.array(QueryResultSchema),
});
