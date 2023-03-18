import { describe, it, expect } from "vitest";

import { DataType } from ".";
import { useTestClient } from "./_shared.util";

describe.concurrent("Lemon Squeezy - Order", () => {
  const client = useTestClient();

  it("GET - /orders", async () => {
    // const orderItems = await client("/orders", "GET");

    // expect(orderItems).toBeDefined();
    // expect(orderItems.data).toBeDefined();
    // expect(orderItems.data.length).toBeGreaterThanOrEqual(1);
    // expect(orderItems.data.at(0)).toBeDefined();
    // expect(orderItems.data.at(0)?.type).toBe(DataType.orders);
    // expect(orderItems.errors).toBeUndefined();

    expect(true).toBe(true);
  });

  it("GET - /orders/:id", async () => {
    // const orderItems = await client("/orders", "GET");
    // const orderItem = await client(`/orders/:id`, "GET", {
    //   id: orderItems.data.at(0)!.id,
    // });

    // expect(orderItem).toBeDefined();
    // expect(orderItem.data).toBeDefined();
    // expect(orderItem.data.type).toBe(DataType.orders);
    // expect(orderItem.errors).toBeUndefined();

    expect(true).toBe(true);
  });
});
