# 🚀 @untypeable/spacex

Untyped API for open source SpaceX API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untyped/spacex

# yarn
yarn add @untyped/spacex

# pnpm
pnpm install @untyped/spacex
```

## 🦄 Usage

Create a new client instance with the `SpaceXRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { SpaceXRouter } from "@untyped/spacex";

const client = createTypeLevelClient<SpaceXRouter>((path, input = {}) =>
  fetch(`https://api.spacexdata.com/${path}?${new URLSearchParams(input)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.SPACEX_API_KEY}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
);

const capsules = await client("/capsules");
```
