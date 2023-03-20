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

const client = createTypeLevelClient<LilWeatherRouter>((path, input = {}) =>
  fetch(`https://api.lil.software/${path}?${new URLSearchParams(input)}`).then(
    (res) => res.json()
  )
);

const weather = await client("/weather", {
  latitude: 40.709335,
  longitude: -73.956558,
});

const news = await client("/news");

const stocks = await client("/stocks", {
  symbol: "AAPL",
});
```
