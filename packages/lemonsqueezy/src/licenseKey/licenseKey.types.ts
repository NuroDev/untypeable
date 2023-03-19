import type { z } from "zod";

import type {
  LicenseKeyParamsSchema,
  LicenseKeySchema,
  LicenseKeysParamsSchema,
  LicenseKeysSchema,
} from "./licenseKey.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/license-keys#the-license-key-object
 */
export type LicenseKey = z.infer<typeof LicenseKeySchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/license-keys#the-license-key-object
 */
export type LicenseKeys = z.infer<typeof LicenseKeysSchema>;

export type LicenseKeysParams = z.infer<typeof LicenseKeysParamsSchema>;

export type LicenseKeyParams = z.infer<typeof LicenseKeyParamsSchema>;
