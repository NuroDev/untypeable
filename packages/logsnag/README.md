# 📱 @untypeable/logsnag

Untyped API for LogSnag

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install @untyped/logsnag

# yarn
yarn add @untyped/logsnag

# pnpm
pnpm install @untyped/logsnag
```

## 🦄 Usage

Create a new client instance with the `LogSnagRouter` & your desired fetch handler

```typescript
import { createTypeLevelClient } from "untypeable";

import type { LogSnagRouter } from "@untyped/spacex";

const client = createTypeLevelClient<LogSnagRouter>(
  (path, { apiVersion = "v1", ...input }) =>
    fetch(`https://api.logsnag.com/${apiVersion}/${path}`, {
      body: JSON.stringify(input),
      headers: {
        Authorization: `Bearer ${process.env.LOGSNAG_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.json())
);

const log = await client("/log", {
  channel: "waitlist",
  event: "User Joined",
  icon: "🎉",
  tags: {
    name: "john doe",
    email: "john@example.com",
  },
  notify: true,
});

const insight = await client("/insight", {
  title: "User Count",
  value: "100",
  icon: "👨",
});
```
