import { join } from "node:path";
import { createTypeLevelClient } from "untypeable";

import type { LemonSqueezyRouter } from "../packages/lemonsqueezy";

const YOUR_LEMON_SQUEEZY_API_KEY = "ABC_123";

async function main() {
  const client = createTypeLevelClient<LemonSqueezyRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(
        join("v1", pathWithParams),
        "https://api.lemonsqueezy.com"
      );

      const response = await fetch(url.href, {
        headers: {
          Authorization: `Bearer ${YOUR_LEMON_SQUEEZY_API_KEY}`,
        },
      });

      return await response.json();
    }
  );

  const stores = await client("/stores");
  console.log({ stores });

  const me = await client("/users/me");
  console.log({ me });
}

main();
