# 🗿 @untypeable/jsonplaceholder

Untypeable router type definitions & validators for the JSONPlaceholder API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/jsonplaceholder

# yarn
yarn add @untypeable/jsonplaceholder

# pnpm
pnpm install @untypeable/jsonplaceholder
```

## 🦄 Usage

Create a new client instance with the `JSONPlaceholderRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { JSONPlaceholderRouter } from "@untypeable/jsonplaceholder";

const client = createTypeLevelClient<JSONPlaceholderRouter>(
  async (path, method, input = {}) => {
    const pathWithParams = path.replace(
      /:([a-zA-Z0-9_]+)/g,
      (_, key) => input[key]
    );

    const url = new URL(pathWithParams, "https://jsonplaceholder.typicode.com");

    const response = await fetch(url.href, {
      body: method === "GET" ? undefined : JSON.stringify(input),
      method,
    });

    return await response.json();
  }
);

const todos = await client("/todos", "GET");
```
