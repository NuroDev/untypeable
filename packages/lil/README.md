# ☀️ @untyped/lil

Untyped API for all lil API's

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untyped/lil

# yarn
yarn add @untyped/lil

# pnpm
pnpm install @untyped/lil
```

## 🦄 Usage

Create a new client instance with the `LilRouter` & your desired fetch handler

```typescript
import type { LilRouter } from "@untyped/lil";

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
