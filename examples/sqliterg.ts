import { createTypeLevelClient } from "untypeable";

import type { SqlitergRouter } from "../packages/sqliterg";

const API_BASE_URL = "http://localhost:12321";

export default async function main() {
  const client = createTypeLevelClient<SqlitergRouter>(async (path, params) => {
    const url = new URL(path, API_BASE_URL);
    return fetch(url.href, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    }).then((response) => response.json());
  });

  const { results } = await client("/:id", {
    id: "79cf6ead-27fd-4389-9013-0c03a73b61d7",
    transaction: [
      {
        query: "SELECT * FROM TEMP",
      },
      {
        query: "SELECT * FROM TEMP WHERE ID = :id",
        values: { id: 1 },
      },
      {
        statement: "INSERT INTO TEMP (ID, VAL) VALUES (0, 'ZERO')",
      },
      {
        noFail: true,
        statement: "INSERT INTO TEMP (ID, VAL) VALUES (:id, :val)",
        values: { id: 1, val: "a" },
      },
      {
        statement: "^Q2",
        valuesBatch: [
          { id: 2, val: "b" },
          { id: 3, val: "c" },
        ],
      },
      {
        statement: "INSERT INTO TEMP (ID, VAL) VALUES (?, ?)",
        values: [4, "d"],
      },
    ],
  });
}
