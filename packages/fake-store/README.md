# 🔐 @untypeable/fake-store

Untypeable router type definitions & validators for the [Fake Store](https://fakestoreapi.com/) API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/fake-store

# yarn
yarn add @untypeable/fake-store

# pnpm
pnpm install @untypeable/fake-store
```

## 🦄 Usage

Create a new client instance with the `UUIDRocksRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { FakeStoreRouter } from "@untypeable/fake-store";

const client = createTypeLevelClient<FakeStoreRouter>(
  async (method, path, input = {}) => {
    const pathWithParams = path.replace(
      /:([a-zA-Z0-9_]+)/g,
      (_, key) => input[key]
    );

    const url = new URL(pathWithParams, "https://fakestoreapi.com/");
    Object.entries(input).forEach(([key, value]) =>
      url.searchParams.append(key, value as string)
    );

    const response = await fetch(url.href, {
      body: ["POST", "PATCH", "PUT"].includes(method)
        ? JSON.stringify(input)
        : undefined,
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }
);
```
