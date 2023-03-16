import { join } from "node:path";
import { createTypeLevelClient } from "untypeable";

import "dotenv/config";

import type { LemonSqueezyRouter } from "../packages/lemonsqueezy";

export default async function main() {
  const client = createTypeLevelClient<LemonSqueezyRouter>(
    async (path, method, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(
        join("v1", pathWithParams),
        "https://api.lemonsqueezy.com"
      );

      const hasBody = ["DELETE", "POST", "PUT"].includes(method);

      const response = await fetch(url.href, {
        body: hasBody ? JSON.stringify(input) : undefined,
        method,
        headers: {
          Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
        },
      });

      return await response.json();
    }
  );

  const stores = await client("/stores", "GET");
  console.log(stores);

  const me = await client("/users/me", "GET");
  console.log(me);
}
