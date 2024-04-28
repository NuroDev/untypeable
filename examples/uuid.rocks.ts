import { createTypeLevelClient } from "../packages/uuid.rocks/node_modules/untypeable";

import type { UUIDRocksRouter } from "../packages/uuid.rocks/src";

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

  const json = await client("/json");
  console.log({ json });

  const bulkJson = await client("/json/bulk", { count: 2 });
  console.log({ bulkJson });

  const jsonMap = await client("/json/map/:key", { key: "foobar" });
  console.log({ jsonMap });

  const nanoId = await client("/nanoid");
  console.log({ nanoId });

  const plain = await client("/plain");
  console.log({ plain });

  const plainBulk = await client("/plain/bulk", { count: 2 });
  console.log({ plainBulk });

  const plainMap = await client("/plain/map/:key", { key: "foobar" });
  console.log({ plainMap });

  const plainNamespaceMap = await client("/plain/map/:namespace/:key", {
    namespace: "foo",
    key: "bar",
  });
  console.log({ plainNamespaceMap });

  const s = await client("/s");
  console.log({ s });

  const short = await client("/short");
  console.log({ short });

  const stats = await client("/stats");
  console.log({ stats });

  const ulid = await client("/ulid");
  console.log({ ulid });
}
