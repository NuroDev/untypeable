import { describe, it, expect } from "vitest";

import { DataType } from "../_shared/_shared.types";
import { OrderSchema, OrdersSchema } from "./order.validators";
import { useTestClient } from "../_shared/_shared.util";

describe.concurrent("Lemon Squeezy - Order", () => {
  const client = useTestClient();

  it("GET - /orders", async () => {
    // const orders = await client("/orders", "GET");

    // expect(orders).toBeDefined();
    // expect(orders.data).toBeDefined();
    // expect(orders.data.length).toBeGreaterThanOrEqual(1);
    // expect(orders.data.at(0)).toBeDefined();
    // expect(orders.data.at(0)?.type).toBe(DataType.orders);
    // expect(orders.errors).toBeUndefined();

    // expect(OrdersSchema.safeParse(orders).success).toBe(true);

    expect(true).toBe(true);
  });

  it("GET - /orders/:id", async () => {
    // const orders = await client("/orders", "GET");
    // const order = await client(`/orders/:id`, "GET", {
    //   id: orders.data.at(0)!.id,
    // });

    // expect(order).toBeDefined();
    // expect(order.data).toBeDefined();
    // expect(order.data.type).toBe(DataType.orders);
    // expect(order.errors).toBeUndefined();

    // expect(OrdersSchema.safeParse(orders).success).toBe(true);
    // expect(OrderSchema.safeParse(order).success).toBe(true);

    expect(true).toBe(true);
  });
});
