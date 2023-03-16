import { createTypeLevelClient } from "untypeable";
import { describe, it, expect, beforeAll } from "vitest";

import "minifaker/locales/en";

import type { LilRouter } from ".";

describe.concurrent("lil APIs", () => {
  const client = createTypeLevelClient<LilRouter>(async (path, input = {}) => {
    const url = new URL(path, "https://api.lil.software/");
    Object.entries(input).forEach(([key, value]) =>
      url.searchParams.append(key, value as string)
    );

    const response = await fetch(url.href);

    return await response.json();
  });

  beforeAll(() => {
    if (!client) throw "Failed to initialise untypeable client instance.";
  });

  it("GET - /news", async () => {
    const news = await client("/news");

    expect(news).toBeDefined();
    expect(news.articles).toBeDefined();
    expect(Array.isArray(news.articles)).toBe(true);
    expect(news.articles.at(0)).toBeDefined();
    expect(news.articles.at(0)?.description).toBeDefined();
    expect(news.articles.at(0)?.description).toBeTypeOf("string");
    expect(news.articles.at(0)?.title).toBeDefined();
    expect(news.articles.at(0)?.title).toBeTypeOf("string");
    expect(news.articles.at(0)?.url).toBeDefined();
    expect(news.articles.at(0)?.url).toBeTypeOf("string");
  });

  it("GET - /stocks", async () => {
    const [successfulStock, failedStock] = await Promise.all([
      client("/stocks", {
        symbol: "AAPL",
      }),
      client("/stocks", {
        symbol: "abc1234567890",
      }),
    ]);

    expect(successfulStock).toBeDefined();
    expect(successfulStock.current).toBeDefined();
    expect(successfulStock.current).toBeTypeOf("number");
    expect(successfulStock.high).toBeDefined();
    expect(successfulStock.high).toBeTypeOf("number");
    expect(successfulStock.low).toBeDefined();
    expect(successfulStock.low).toBeTypeOf("number");
    expect(successfulStock.name).toBeDefined();
    expect(successfulStock.name).toBeTypeOf("string");
    expect(successfulStock.open).toBeDefined();
    expect(successfulStock.open).toBeTypeOf("number");
    expect(successfulStock.previous_close).toBeDefined();
    expect(successfulStock.previous_close).toBeTypeOf("number");

    expect(failedStock).toBeDefined();
    expect(failedStock.current).toBe(0);
    expect(failedStock.high).toBe(0);
    expect(failedStock.low).toBe(0);
    expect(failedStock.name).toBe(null);
    expect(failedStock.open).toBe(0);
    expect(failedStock.previous_close).toBe(0);
  });

  it("GET - /weather", async () => {
    const [successfulWeather, failedWeather] = await Promise.all([
      // New York
      client("/weather", {
        latitude: 40.709335,
        longitude: -73.956558,
      }),
      //
      client("/weather", {
        latitude: 0,
        longitude: 0,
      }),
    ]);

    expect(successfulWeather).toBeDefined();
    expect(successfulWeather.forecast).toBeDefined();
    expect(Array.isArray(successfulWeather.forecast)).toBe(true);
    expect(successfulWeather.forecast?.at(0)).toBeDefined();
    expect(successfulWeather.forecast?.at(0)?.description).toBeDefined();
    expect(successfulWeather.forecast?.at(0)?.description).toBeTypeOf("string");
    expect(successfulWeather.forecast?.at(0)?.name).toBeDefined();
    expect(successfulWeather.forecast?.at(0)?.name).toBeTypeOf("string");
    expect(successfulWeather.forecast?.at(0)?.temperature).toBeDefined();
    expect(successfulWeather.forecast?.at(0)?.temperature).toBeTypeOf("number");
    expect(successfulWeather.forecast?.at(0)?.unit).toBeDefined();
    expect(successfulWeather.forecast?.at(0)?.unit).toBeTypeOf("string");
    expect(successfulWeather.error).toBeUndefined();

    expect(failedWeather.error).toBeDefined();
    expect(failedWeather.error).toBeTruthy();
    expect(failedWeather.forecast).toBeUndefined();
  });
});
