# 🧘 @untypeable/randomuser

Untypeable router type definitions & validators for the random user generator API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/randomuser

# yarn
yarn add @untypeable/randomuser

# pnpm
pnpm install @untypeable/randomuser
```

## 🦄 Usage

Create a new client instance with the `LilRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { RandomUserRouter } from "@untypeable/randomuser";

const client = createTypeLevelClient<RandomUserRouter>(async (path) => {
  const url = new URL(path, "https://randomuser.me/");
  Object.entries(input).forEach(([key, value]) =>
    url.searchParams.append(key, value as string)
  );

  const response = await fetch(url.href);

  return await response.json();
});

const randomUser = await client("/api");

const femaleUser = await client("/api", { gender: "female" });
```
