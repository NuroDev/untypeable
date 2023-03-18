import { describe, it, expect } from "vitest";

import { WeatherSchema } from "./zod";
import { useTestClient } from "./_shared.util";

describe.concurrent("lil APIs - Weather", () => {
  const client = useTestClient();

  it("GET - /weather - Successful request", async () => {
    const successfulWeather = await client("/weather", {
      latitude: 40.709335,
      longitude: -73.956558,
    });

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

    expect(WeatherSchema.safeParse(successfulWeather).success).toBe(true);
  });

  it("GET - /weather - Failed request", async () => {
    const failedWeather = await client("/weather", {
      latitude: 0,
      longitude: 0,
    });

    expect(failedWeather.error).toBeDefined();
    expect(failedWeather.error).toBeTruthy();
    expect(failedWeather.forecast).toBeUndefined();

    expect(WeatherSchema.safeParse(failedWeather).success).toBe(true);
  });
});
