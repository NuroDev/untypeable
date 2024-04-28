import { describe, it, expect } from "vitest";

import {
  ProductSchema,
  ProductsCategoriesSchema,
  ProductsSchema,
  ProductsCategorySchema,
  UpdateProductSchema,
  CreateProductSchema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe("fakestoreapi.com - products", () => {
  const client = useTestClient();

  describe("DELETE", () => {
    it("/products/:id", async () => {
      const deletedProduct = await client("DELETE", "/products/:id", {
        id: 1,
      });

      expect(deletedProduct).toMatchSnapshot();
      expect(ProductSchema.safeParse(deletedProduct).success).toBe(true);
    });
  });

  describe("GET", () => {
    it("/products", async () => {
      const products = await client("GET", "/products");

      expect(products).toMatchSnapshot();
      expect(ProductsSchema.safeParse(products).success).toBe(true);
    });

    it("/products?limit=2", async () => {
      const limitedProducts = await client("GET", "/products", { limit: 2 });

      expect(limitedProducts).toMatchSnapshot();
      expect(limitedProducts).toHaveLength(2);
      expect(ProductsSchema.safeParse(limitedProducts).success).toBe(true);
    });

    it("/products?order=desc", async () => {
      const orderedProducts = await client("GET", "/products", {
        order: "desc",
      });

      expect(orderedProducts).toMatchSnapshot();
      expect(ProductsSchema.safeParse(orderedProducts).success).toBe(true);
    });

    it("/products?limit=1&order=desc", async () => {
      const products = await client("GET", "/products", {
        limit: 1,
        order: "desc",
      });

      expect(products).toMatchSnapshot();
      expect(products).toHaveLength(1);
      expect(ProductsSchema.safeParse(products).success).toBe(true);
    });

    it("/products/:id", async () => {
      const product = await client("GET", "/products/:id", {
        id: 1,
      });

      expect(product).toMatchSnapshot();
      expect(ProductSchema.safeParse(product).success).toBe(true);
    });

    it("/products/categories", async () => {
      const productsCategories = await client("GET", "/products/categories");

      expect(productsCategories).toMatchSnapshot();
      expect(
        ProductsCategoriesSchema.safeParse(productsCategories).success
      ).toBe(true);
    });

    it("/products/:id", async () => {
      const productsInCategory = await client(
        "GET",
        "/products/category/:category",
        { category: "jewelery" }
      );

      expect(productsInCategory).toMatchSnapshot();
      expect(ProductsCategorySchema.safeParse(productsInCategory).success).toBe(
        true
      );
    });
  });

  describe("PATCH", () => {
    it("/products/:id", async () => {
      const updatedProduct = await client("PATCH", "/products/:id", {
        id: 1,
        title: "Updated Product",
      });

      expect(updatedProduct).toMatchSnapshot();
      expect(UpdateProductSchema.safeParse(updatedProduct).success).toBe(true);
    });
  });

  describe("POST", () => {
    it("/products", async () => {
      const newProduct = await client("POST", "/products", {
        category: "jewelery",
        description: "A new product we're selling",
        image: "https://example.com/image.jpg",
        price: 100,
        rating: {
          rate: 4.5,
          count: 100,
        },
        title: "New Product",
      });

      expect(newProduct).toMatchSnapshot();
      expect(CreateProductSchema.safeParse(newProduct).success).toBe(true);
    });
  });

  describe("PUT", () => {
    it("/products/:id", async () => {
      const updatedProduct = await client("PUT", "/products/:id", {
        id: 1,
        title: "Updated Product",
      });

      expect(updatedProduct).toMatchSnapshot();
      expect(UpdateProductSchema.safeParse(updatedProduct).success).toBe(true);
    });
  });
});
