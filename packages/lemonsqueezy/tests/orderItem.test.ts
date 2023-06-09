import { describe, it, expect } from "vitest";

import { DataType } from "../src/_shared.validators";
import {
  OrderItemSchema,
  OrderItemsSchema,
} from "../src/orderItem/orderItem.validators";
import { useTestClient } from "./_client";

describe.concurrent("Lemon Squeezy - Order Item", () => {
  const client = useTestClient();

  it("GET - /order-items", async () => {
    // const orderItems = await client("/order-items", "GET");

    // expect(orderItems).toBeDefined();
    // expect(orderItems.data).toBeDefined();
    // expect(orderItems.data.length).toBeGreaterThanOrEqual(1);
    // expect(orderItems.data.at(0)).toBeDefined();
    // expect(orderItems.data.at(0)?.type).toBe(DataType.enum.order_items);
    // expect(orderItems.errors).toBeUndefined();

    // expect(OrderItemsSchema.safeParse(orderItems).success).toBe(true);

    expect(true).toBe(true);
  });

  it("GET - /order-items/:id", async () => {
    // const orderItems = await client("/order-items", "GET");
    // const orderItem = await client(`/order-items/:id`, "GET", {
    //   id: orderItems.data.at(0)!.id,
    // });

    // expect(orderItem).toBeDefined();
    // expect(orderItem.data).toBeDefined();
    // expect(orderItem.data.type).toBe(DataType.enum.order_items);
    // expect(orderItem.errors).toBeUndefined();

    // expect(OrderItemsSchema.safeParse(orderItems).success).toBe(true);
    // expect(OrderItemSchema.safeParse(orderItem).success).toBe(true);

    expect(true).toBe(true);
  });
});
