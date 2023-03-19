import { describe, it, expect } from "vitest";

import { DataType } from "../_shared/_shared.validators";
import { ProductSchema, ProductsSchema } from "./product.validators";
import { useTestClient } from "../_shared/_shared.util";

describe.concurrent("Lemon Squeezy - Product", () => {
  const client = useTestClient();

  it("GET - /products", async () => {
    const products = await client("/products", "GET");

    expect(products).toBeDefined();
    expect(products.data).toBeDefined();
    expect(products.data.length).toBeGreaterThanOrEqual(1);
    expect(products.data.at(0)).toBeDefined();
    expect(products.data.at(0)?.type).toBe(DataType.enum.products);
    expect(products.errors).toBeUndefined();

    expect(ProductsSchema.safeParse(products).success).toBe(true);
  });

  it("GET - /products/:id", async () => {
    const products = await client("/products", "GET");
    const product = await client(`/products/:id`, "GET", {
      id: products.data.at(0)!.id,
    });

    expect(product).toBeDefined();
    expect(product.data).toBeDefined();
    expect(product.data.type).toBe(DataType.enum.products);
    expect(product.errors).toBeUndefined();

    expect(ProductsSchema.safeParse(products).success).toBe(true);
    expect(ProductSchema.safeParse(product).success).toBe(true);
  });
});
