# 🔐 @untypeable/uuid.rocks

Untypeable router type definitions & validators for the [uuid.rocks](https://uuid.rocks/) API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/uuid.rocks

# yarn
yarn add @untypeable/uuid.rocks

# pnpm
pnpm install @untypeable/uuid.rocks
```

## 🦄 Usage

Create a new client instance with the `UUIDRocksRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { UUIDRocksRouter } from "@untypeable/uuid.rocks";

const client = createTypeLevelClient<UUIDRocksRouter>(async (path, input = {}) => {
  const url = new URL(path, "https://uuid.rocks/");
  Object.entries(input).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  return fetch(url.href).then((response) => response.json());
});
```
