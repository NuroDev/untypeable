import { createTypeLevelClient } from "untypeable";
import { join } from "node:path";

import "dotenv/config";

import type { LogSnagRouter } from "../packages/logsnag";

export default async function main() {
  const client = createTypeLevelClient<LogSnagRouter>(
    async (path, input = {}) => {
      const { apiVersion = "v1", ...options } = input;

      const url = new URL(join(apiVersion, path), "https://api.logsnag.com");

      const response = await fetch(url.href, {
        body: JSON.stringify(options),
        headers: {
          Authorization: `Bearer ${process.env.LOGSNAG_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      return await response.json();
    }
  );

  await client("/log", {
    project: "nuro",
    channel: "untypeable",
    event: "Test",
    description: "A basic test event from the `@untypeable/logsnag` package",
    icon: "👋",
    notify: false,
  });
}
