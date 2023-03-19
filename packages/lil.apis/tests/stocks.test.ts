import { describe, it, expect } from "vitest";

import { StockSchema } from "../src/zod";
import { useTestClient } from "../src/_shared.util";

describe.concurrent("lil APIs - Stocks", () => {
  const client = useTestClient();

  it("GET - /stocks - Successful request", async () => {
    const successfulStock = await client("/stocks", {
      symbol: "AAPL",
    });

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

    expect(StockSchema.safeParse(successfulStock).success).toBe(true);
  });

  it("GET - /stocks - Failed request", async () => {
    const failedStock = await client("/stocks", {
      symbol: "abc1234567890",
    });

    expect(failedStock).toBeDefined();
    expect(failedStock.current).toBe(0);
    expect(failedStock.high).toBe(0);
    expect(failedStock.low).toBe(0);
    expect(failedStock.name).toBe(null);
    expect(failedStock.open).toBe(0);
    expect(failedStock.previous_close).toBe(0);

    expect(StockSchema.safeParse(failedStock).success).toBe(true);
  });
});
