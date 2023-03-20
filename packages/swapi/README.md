# 🪐 @untypeable/swapi

Untypeable router type definitions & validators for the swapi Star Wars API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/swapi

# yarn
yarn add @untypeable/swapi

# pnpm
pnpm install @untypeable/swapi
```

## 🦄 Usage

Create a new client instance with the `SwapiRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { SwapiRouter } from "@untypeable/swapi";

const client = createTypeLevelClient<SwapiRouter>((path, input = {}) =>
  fetch(`https://swapi.dev/api/${path}?${new URLSearchParams(input)}`).then(
    (res) => res.json()
  )
);

const people = await client("/people");
```
