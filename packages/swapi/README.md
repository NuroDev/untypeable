# ☀️ @untyped/swapi

Untyped API for the swapi Star Wars API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untyped/swapi

# yarn
yarn add @untyped/swapi

# pnpm
pnpm install @untyped/swapi
```

## 🦄 Usage

Create a new client instance with the `LilRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { LilRouter } from "@untyped/swapi";

const client = createTypeLevelClient<LilWeatherRouter>((path, input = {}) =>
  fetch(`https://swapi.dev/api/${path}?${new URLSearchParams(input)}`).then(
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
