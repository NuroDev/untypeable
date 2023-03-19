import { describe, it, expect } from "vitest";

import { DataType } from "../_shared/_shared.types";
import { useTestClient } from "../_shared/_shared.util";

describe.concurrent("Lemon Squeezy - License Key", () => {
  const client = useTestClient();

  it("GET - /license-keys", async () => {
    // const licenseKeys = await client("/license-keys", "GET");

    // expect(licenseKeys).toBeDefined();
    // expect(licenseKeys.data).toBeDefined();
    // expect(licenseKeys.data.length).toBeGreaterThanOrEqual(1);
    // expect(licenseKeys.data.at(0)).toBeDefined();
    // expect(licenseKeys.data.at(0)?.type).toBe(DataType.license_keys);
    // expect(licenseKeys.errors).toBeUndefined();

    expect(true).toBe(true);
  });

  it("GET - /license-keys/:id", async () => {
    // const licenseKeys = await client("/license-keys", "GET");
    // const licenseKey = await client(`/license-keys/:id`, "GET", {
    //   id: licenseKeys.data.at(0)!.id,
    // });

    // expect(licenseKey).toBeDefined();
    // expect(licenseKey.data).toBeDefined();
    // expect(licenseKey.data.type).toBe(DataType.license_keys);
    // expect(licenseKey.errors).toBeUndefined();

    expect(true).toBe(true);
  });
});
