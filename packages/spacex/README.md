# 🚀 @untypeable/spacex

Untypeable router type definitions & validators for the open source SpaceX API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/spacex

# yarn
yarn add @untypeable/spacex

# pnpm
pnpm install @untypeable/spacex
```

## 🦄 Usage

Create a new client instance with the `SpaceXRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { SpaceXRouter } from "@untypeable/spacex";

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
