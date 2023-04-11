import { createTypeLevelClient } from "untypeable";

import type { HackerNewsRouter } from "../packages/hackernews";

export default async function main() {
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

  const topStories = await client("/v0/topstories.json");
  console.log(topStories);

  const randomStory = await client("/v0/item/:id.json", {
    id: topStories[Math.floor(Math.random() * topStories.length)],
  });
  console.log(randomStory);
}
