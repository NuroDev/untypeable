import { createTypeLevelClient } from "../packages/uuid.rocks/node_modules/untypeable";

import type { UUIDRocksRouter } from "../packages/uuid.rocks";

export default async function main() {
  const client = createTypeLevelClient<UUIDRocksRouter>(
    async (path, input = {}) => {
      const url = new URL(path, "https://uuid.rocks/");
      Object.entries(input).forEach(([key, value]) =>
        url.searchParams.append(key, value as string)
      );

      return fetch(url.href).then((response) => response.json());
    }
  );

  const [
    json,
    bulkJson,
    jsonMap,
    nanoId,
    plain,
    plainBulk,
    plainMap,
    plainNamespaceMap,
    s,
    short,
    stats,
    ulid,
  ] = await Promise.all([
    client("/json"),
    client("/json/bulk", { count: 2 }),
    client("/json/map/:key", { key: "foobar" }),
    client("/nanoid"),
    client("/plain"),
    client("/plain/bulk", { count: 2 }),
    client("/plain/map/:key", { key: "foobar" }),
    client("/plain/map/:namespace/:key", { namespace: "foo", key: "bar" }),
    client("/s"),
    client("/short"),
    client("/stats"),
    client("/ulid"),
  ]);
  console.log({
    json,
    bulkJson,
    jsonMap,
    nanoId,
    plain,
    plainBulk,
    plainMap,
    plainNamespaceMap,
    s,
    short,
    stats,
    ulid,
  });
}
