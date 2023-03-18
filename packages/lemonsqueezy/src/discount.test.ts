import { describe, it, expect } from "vitest";

import { DataType } from ".";
import { DiscountSchema, DiscountsSchema } from "./zod";
import { useTestClient } from "./_shared.util";

describe.concurrent("Lemon Squeezy - Discount", () => {
  const client = useTestClient();

  it("GET - /discounts", async () => {
    const discounts = await client("/discounts", "GET");

    expect(discounts).toBeDefined();
    expect(discounts.data).toBeDefined();
    expect(discounts.data.length).toBeGreaterThanOrEqual(1);
    expect(discounts.data.at(0)).toBeDefined();
    expect(discounts.data.at(0)?.type).toBe(DataType.discounts);
    expect(discounts.errors).toBeUndefined();

    expect(DiscountsSchema.safeParse(discounts).success).toBe(true);
  });

  it("GET - /discounts/:id", async () => {
    const discounts = await client("/discounts", "GET");
    const discount = await client(`/discounts/:id`, "GET", {
      id: discounts.data.at(0)!.id,
    });

    expect(discount).toBeDefined();
    expect(discount.data).toBeDefined();
    expect(discount.data.type).toBe(DataType.discounts);
    expect(discount.errors).toBeUndefined();

    expect(DiscountsSchema.safeParse(discounts).success).toBe(true);
    expect(DiscountSchema.safeParse(discount).success).toBe(true);
  });
});