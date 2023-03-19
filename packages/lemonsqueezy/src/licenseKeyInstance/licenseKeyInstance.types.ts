import type { z } from "zod";

import type {
  LicenseKeyInstanceParamsSchema,
  LicenseKeyInstanceSchema,
  LicenseKeyInstancesParamsSchema,
  LicenseKeyInstancesSchema,
} from "./licenseKeyInstance.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#the-license-key-instance-object
 */
export type LicenseKeyInstance = z.infer<typeof LicenseKeyInstanceSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#the-license-key-instance-object
 */
export type LicenseKeyInstances = z.infer<typeof LicenseKeyInstancesSchema>;

export type LicenseKeyInstancesParams = z.infer<
  typeof LicenseKeyInstancesParamsSchema
>;

export type LicenseKeyInstanceParams = z.infer<
  typeof LicenseKeyInstanceParamsSchema
>;
