import { describe, it, expect } from "vitest";

import {
  CartSchema,
  CartsSchema,
  UpdatedCartSchema,
  UserCartsSchema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe("fakestoreapi.com - cart", () => {
  const client = useTestClient();

  describe("DELETE", () => {
    it("/carts/:id", async () => {
      const deletedCart = await client("DELETE", "/carts/:id", {
        id: 1,
      });

      expect(deletedCart).toMatchSnapshot();
      expect(CartSchema.safeParse(deletedCart).success).toBe(true);
    });
  });

  describe("GET", () => {
    it("/carts", async () => {
      const carts = await client("GET", "/carts");

      expect(carts).toMatchSnapshot();
      expect(CartsSchema.safeParse(carts).success).toBe(true);
    });

    it("/carts?limit=2", async () => {
      const limitedCarts = await client("GET", "/carts", { limit: 2 });

      expect(limitedCarts).toMatchSnapshot();
      expect(limitedCarts).toHaveLength(2);
      expect(CartsSchema.safeParse(limitedCarts).success).toBe(true);
    });

    it("/carts?order=desc", async () => {
      const orderedCarts = await client("GET", "/carts", {
        order: "desc",
      });

      expect(orderedCarts).toMatchSnapshot();
      expect(CartsSchema.safeParse(orderedCarts).success).toBe(true);
    });

    it("/carts?startdate=2019-12-10&enddate=2020-10-10", async () => {
      const dateRangeCarts = await client("GET", "/carts", {
        startdate: "2019-12-10",
        enddate: "2020-10-10",
      });

      expect(dateRangeCarts).toMatchSnapshot();
      expect(CartsSchema.safeParse(dateRangeCarts).success).toBe(true);
    });

    it("/carts?limit=1&order=desc", async () => {
      const carts = await client("GET", "/carts", {
        limit: 1,
        order: "desc",
      });

      expect(carts).toMatchSnapshot();
      expect(carts).toHaveLength(1);
      expect(CartsSchema.safeParse(carts).success).toBe(true);
    });

    it("/carts/:id", async () => {
      const cart = await client("GET", "/carts/:id", {
        id: 1,
      });

      expect(cart).toMatchSnapshot();
      expect(CartSchema.safeParse(cart).success).toBe(true);
    });

    it("/carts/user/:userId", async () => {
      const userCarts = await client("GET", "/carts/user/:userId", {
        userId: 2,
      });

      expect(userCarts).toMatchSnapshot();
      expect(UserCartsSchema.safeParse(userCarts).success).toBe(true);
    });
  });

  describe("PATCH", () => {
    it("/products/:id", async () => {
      const updatedCart = await client("PATCH", "/carts/:id", {
        date: new Date(0),
        id: 1,
        products: [],
        userId: 3,
      });

      expect(updatedCart).toMatchSnapshot();
      expect(CartSchema.safeParse(updatedCart).success).toBe(true);
    });
  });

  describe("POST", () => {
    it("/products", async () => {
      const newCart = await client("POST", "/carts", {
        date: new Date(0),
        products: [],
        userId: 3,
      });

      expect(newCart).toMatchSnapshot();
      expect(CartSchema.safeParse(newCart).success).toBe(true);
    });
  });

  describe("PUT", () => {
    it("/carts/:id", async () => {
      const updatedCart = await client("PUT", "/carts/:id", {
        products: [],
        userId: 3,
        id: 1,
      });

      expect(updatedCart).toMatchSnapshot();
      expect(UpdatedCartSchema.safeParse(updatedCart).success).toBe(true);
    });
  });
});
