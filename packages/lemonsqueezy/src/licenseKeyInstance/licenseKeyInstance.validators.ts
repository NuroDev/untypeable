import { z } from "zod";

import { DataType, defineLemonSqueezySchema } from "../_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#the-license-key-instance-object
 */
export const LicenseKeyInstanceSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * The unique identifier (UUID) for this instance
       *
       * This is the `instance_id` returned when activating a license key
       *
       * @docs https://docs.lemonsqueezy.com/help/licensing/license-api#post-v1-licenses-activate
       */
      identifier: z.string(),
      /**
       * The ID of the license key this instance belongs to
       */
      license_key_id: z.number(),
      /**
       * The name of the license key instance
       */
      name: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
    }),
    type: z.literal(DataType.enum["license-key-instances"]),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#the-license-key-instance-object
 */
export const LicenseKeyInstancesSchema = defineLemonSqueezySchema(
  z.array(LicenseKeyInstanceSchema.shape.data)
);

export const LicenseKeyInstancesParamsSchema = z.object({
  /**
   * Only return instances belonging to the license key with this ID
   */
  license_key_id: z.string().optional(),
});

export const LicenseKeyInstanceParamsSchema = z.object({
  id: z.string(),
});
