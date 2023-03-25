# 🤏 @untypeable/lil.apis

Untypeable router type definitions & validators for the lil.apis API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/lil.apis

# yarn
yarn add @untypeable/lil.apis

# pnpm
pnpm install @untypeable/lil.apis
```

## 🦄 Usage

Create a new client instance with the `LilRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { LilRouter } from "@untypeable/lil.apis";

const client = createTypeLevelClient<LilRouter>(async (path, input = {}) => {
  const url = new URL(path, "https://api.lil.software/");
  Object.entries(input).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  return fetch(url.href).then((response) => response.json());
});

const weather = await client("/weather", {
  latitude: 40.709335,
  longitude: -73.956558,
});

const news = await client("/news");

const stocks = await client("/stocks", {
  symbol: "AAPL",
});
```
