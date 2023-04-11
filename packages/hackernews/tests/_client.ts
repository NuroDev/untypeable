import { beforeAll } from "vitest";
import { createTypeLevelClient } from "untypeable";
import { fetch } from "undici";

import type { HackerNewsRouter } from "../src";

export function useTestClient() {
  const client = createTypeLevelClient<HackerNewsRouter>(
    async (path, input = {}) => {
      const pathWithParams = path.replace(
        /:([a-zA-Z0-9_]+)/g,
        (_, key) => input[key]
      );

      const url = new URL(pathWithParams, "https://hacker-news.firebaseio.com");
      Object.entries(input).forEach(([key, value]) => {
        if (path.includes(`:${key}`)) return;
        url.searchParams.append(key, value as string);
      });

      const response = await fetch(url.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error(response.statusText);

      return await response.json();
    }
  );

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  return client;
}
