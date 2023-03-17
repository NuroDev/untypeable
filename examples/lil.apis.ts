import { createTypeLevelClient } from "untypeable";

import type { LilRouter } from "../packages/lil.apis";

export default async function main() {
  const client = createTypeLevelClient<LilRouter>(async (path, input = {}) => {
    const url = new URL(path, "https://api.lil.software/");
    Object.entries(input).forEach(([key, value]) =>
      url.searchParams.append(key, value as string)
    );

    const response = await fetch(url.href);

    return await response.json();
  });

  const news = await client("/news");
  console.log(news);

  const stocks = await client("/stocks", {
    symbol: "AAPL",
  });
  console.log(stocks);

  const weather = await client("/weather", {
    latitude: 40.709335,
    longitude: -73.956558,
  });
  console.log(weather);
}
