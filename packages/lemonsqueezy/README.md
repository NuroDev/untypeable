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
  async (path, method, input = {}) => {
    const pathWithParams = path.replace(
      /:([a-zA-Z0-9_]+)/g,
      (_, key) => input[key]
    );

    const url = new URL(
      join("v1", pathWithParams),
      "https://api.lemonsqueezy.com"
    );

    const response = await fetch(url.href, {
      body: ["DELETE", "POST", "PUT"].includes(method)
        ? JSON.stringify(input)
        : undefined,
      method,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return await response.json();
  }
);

const stores = await client("/stores", "GET");
//     ^? Stores
```
