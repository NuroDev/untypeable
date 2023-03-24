import { createTypeLevelClient } from "untypeable";

import type { SpaceXRouter } from "../packages/spacex";

export default async function main() {
  const client = createTypeLevelClient<SpaceXRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(pathWithParams, "https://api.spacexdata.com");

      const response = await fetch(url.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok)
        throw new Error(`[${response.status}]${response.statusText}`);

      return await response.json();
    }
  );

  const latestLaunch = await client("/v5/launches/latest");
  console.log(latestLaunch);
}
