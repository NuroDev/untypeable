# 🗞️ @untypeable/hackernews

Untypeable router type definitions & validators for the Hacker News API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/hackernews

# yarn
yarn add @untypeable/hackernews

# pnpm
pnpm install @untypeable/hackernews
```

## 🦄 Usage

Create a new client instance with the `HackerNewsRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { HackerNewsRouter } from "@untypeable/hackernews";

const client = createTypeLevelClient<HackerNewsRouter>((path, input = {}) => {
  const pathWithParams = path.replace(
    /:([a-zA-Z0-9_]+)/g,
    (_, key) => input[key]
  );

  const url = new URL(pathWithParams, "https://hacker-news.firebaseio.com");

  const response = await fetch(url.href);

  return await response.json();
});

const topStories = await client("/v0/topstories.json");
```
