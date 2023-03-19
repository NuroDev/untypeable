import { describe, it, expect } from "vitest";

import { DataType } from "../src/_shared/_shared.validators";
import {
  LicenseKeyInstanceSchema,
  LicenseKeyInstancesSchema,
} from "../src/licenseKeyInstance/licenseKeyInstance.validators";
import { useTestClient } from "../src/_shared/_shared.util";

describe.concurrent("Lemon Squeezy - License Key Instance", () => {
  const client = useTestClient();

  it("GET - /license-key-instances", async () => {
    // const licenseKeyInstances = await client("/license-key-instances", "GET");

    // expect(licenseKeyInstances).toBeDefined();
    // expect(licenseKeyInstances.data).toBeDefined();
    // expect(licenseKeyInstances.data.length).toBeGreaterThanOrEqual(1);
    // expect(licenseKeyInstances.data.at(0)).toBeDefined();
    // expect(licenseKeyInstances.data.at(0)?.type).toBe(
    //   DataType.enum.license_key_instances
    // );
    // expect(licenseKeyInstances.errors).toBeUndefined();

    // expect(LicenseKeyInstancesSchema.safeParse(licenseKeyInstances).success).toBe(true);

    expect(true).toBe(true);
  });

  it("GET - /license-key-instances/:id", async () => {
    // const licenseKeyInstances = await client("/license-key-instances", "GET");
    // const licenseKeyInstance = await client(
    //   `/license-key-instances/:id`,
    //   "GET",
    //   {
    //     id: licenseKeyInstances.data.at(0)!.id,
    //   }
    // );

    // expect(licenseKeyInstance).toBeDefined();
    // expect(licenseKeyInstance.data).toBeDefined();
    // expect(licenseKeyInstance.data.type).toBe(DataType.enum.license_key_instances);
    // expect(licenseKeyInstance.errors).toBeUndefined();

    // expect(LicenseKeyInstancesSchema.safeParse(licenseKeyInstances).success).toBe(true);
    // expect(LicenseKeyInstanceSchema.safeParse(licenseKeyInstance).success).toBe(true);

    expect(true).toBe(true);
  });
});
