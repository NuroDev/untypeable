# 🍋 @untypeable/lemonsqueezy

Untypeable router type definitions & validators for the official Lemon Squeezy API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/lemonsqueezy

# yarn
yarn add @untypeable/lemonsqueezy

# pnpm
pnpm install @untypeable/lemonsqueezy
```

## 🦄 Usage

Create a new client instance with your API key

```typescript
import { createTypeLevelClient } from "untypeable";

import type { LemonSqueezyRouter } from "@untypeable/lemonsqueezy";

const client = createTypeLevelClient<LemonSqueezyRouter>(
  (path, method, input = {}) =>
    fetch(`https://api.lemonsqueezy.com/v1/${path}`, {
      body: ["DELETE", "POST", "PUT"].includes(method)
        ? JSON.stringify(input)
        : undefined,
      method,
      headers: {
        Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
      },
    }).then((res) => res.json())
);

const stores = await client("/stores", "GET");
//     ^? Stores
```
