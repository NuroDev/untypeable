# 🌿 @untypeable/sqliterg

Untypeable router type definitions & validators for the sqliterg API

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untypeable/sqliterg

# yarn
yarn add @untypeable/sqliterg

# pnpm
pnpm install @untypeable/sqliterg
```

## 🦄 Usage

Create a new client instance with the `SqlitergRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { SqlitergRouter } from "@untypeable/sqliterg";

// const client = createTypeLevelClient<SqlitergRouter>(async (path, input = {}) => {
//   const url = new URL(path, "https://api.lil.software/");
//   Object.entries(input).forEach(([key, value]) =>
//     url.searchParams.append(key, value)
//   );

//   return fetch(url.href).then((response) => response.json());
// });

// const weather = await client("/weather", {
//   latitude: 40.709335,
//   longitude: -73.956558,
// });
```
