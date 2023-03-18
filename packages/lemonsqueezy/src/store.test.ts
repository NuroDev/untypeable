import { describe, it, expect } from "vitest";

import { DataType } from ".";
import { useTestClient } from "./_shared.util";

describe.concurrent("Lemon Squeezy - Store", () => {
  const client = useTestClient();

  it("GET - /stores", async () => {
    const stores = await client("/stores", "GET");

    expect(stores).toBeDefined();
    expect(stores.data).toBeDefined();
    expect(stores.data.length).toBeGreaterThanOrEqual(1);
    expect(stores.data.at(0)).toBeDefined();
    expect(stores.data.at(0)?.type).toBe(DataType.stores);
    expect(stores.errors).toBeUndefined();
  });

  it("GET - /stores/:id", async () => {
    const stores = await client("/stores", "GET");
    const store = await client(`/stores/:id`, "GET", {
      id: stores.data.at(0)!.id,
    });

    expect(store).toBeDefined();
    expect(store.data).toBeDefined();
    expect(store.data.type).toBe(DataType.stores);
    expect(store.errors).toBeUndefined();
  });
});
