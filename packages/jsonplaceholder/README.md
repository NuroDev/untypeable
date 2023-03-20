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
  (path, input = {}) =>
    fetch(
      `https://jsonplaceholder.typicode.com/${path}?${new URLSearchParams(
        input
      )}`
    ).then((res) => res.json())
);

const todos = await client("/todos");
```
