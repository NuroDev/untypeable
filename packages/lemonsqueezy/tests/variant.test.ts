import { describe, it, expect } from "vitest";

import { DataType } from "../src/_shared.validators";
import { useTestClient } from "./_client";
import {
  VariantSchema,
  VariantsSchema,
} from "../src/variant/variant.validators";

describe.concurrent("Lemon Squeezy - Variant", () => {
  const client = useTestClient();

  it("GET - /variants", async () => {
    const variants = await client("/variants", "GET");

    expect(variants).toBeDefined();
    expect(variants.data).toBeDefined();
    expect(variants.data.length).toBeGreaterThanOrEqual(1);
    expect(variants.data.at(0)).toBeDefined();
    expect(variants.data.at(0)?.type).toBe(DataType.enum.variants);
    expect(variants.errors).toBeUndefined();

    expect(VariantsSchema.safeParse(variants).success).toBe(true);
  });

  it("GET - /variants/:id", async () => {
    const variants = await client("/variants", "GET");
    const variant = await client(`/variants/:id`, "GET", {
      id: variants.data.at(0)?.id,
    });

    expect(variant).toBeDefined();
    expect(variant.data).toBeDefined();
    expect(variant.data.type).toBe(DataType.enum.variants);
    expect(variant.errors).toBeUndefined();

    expect(VariantsSchema.safeParse(variants).success).toBe(true);
    expect(VariantSchema.safeParse(variant).success).toBe(true);
  });
});
