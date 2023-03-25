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

const client = createTypeLevelClient<SpaceXRouter>(async (path, input = {}) => {
  const pathWithParams = path.replace(
    /:([a-zA-Z0-9_]+)/g,
    (_, key) => input[key]
  );

  const url = new URL(pathWithParams, "https://api.spacexdata.com");

  return fetch(url.href).then((response) => response.json());
});

const capsules = await client("/v4/capsules");
```
