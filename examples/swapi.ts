import { createTypeLevelClient } from "untypeable";
import { join } from "node:path";

import type { SwapiRouter } from "../packages/swapi";

export default async function main() {
  const client = createTypeLevelClient<SwapiRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(join("/api", pathWithParams), "https://swapi.dev/");

      const response = await fetch(url.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      //   if (!response.ok)
      //     throw new Error(response.statusText, {
      //       cause: response.status,
      //     });

      return await response.json();
    }
  );

  const [films, people, planets, species, starships, vehicles] =
    await Promise.all([
      client("/films"),
      client("/people"),
      client("/planets"),
      client("/species"),
      client("/starships"),
      client("/vehicles"),
    ]);
  console.log({
    films,
    people,
    planets,
    species,
    starships,
    vehicles,
  });
}
