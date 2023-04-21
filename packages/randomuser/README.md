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

const client = createTypeLevelClient<RandomUserRouter>(async (path) =>
  fetch(`https://randomuser.me/${path}`).then((response) => response.json())
);

const randomUser = await client("/api");
```
