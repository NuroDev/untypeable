import { z } from "zod";

import {
  DataType,
  defineLemonSqueezySchema,
} from "../_shared/_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/files#the-file-object
 */
export const FileSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      createdAt: z.string().datetime(),
      /**
       * The unique URL to download the file. Note: for security reasons, download URLs are signed, expire after 1 hour and are rate-limited to 10 downloads per day per IP address
       */
      download_url: z.string(),
      /**
       * The file extension of the file (e.g. `pdf`)
       */
      extension: z.string(),
      /**
       * The unique identifier (UUID) for this file
       */
      identifier: z.string(),
      /**
       * The name of the file (e.g. `example.pdf`)
       */
      name: z.string(),
      /**
       * The human-readable size of the file (e.g. `5.5 MB`)
       */
      size_formatted: z.string(),
      /**
       * A positive integer in bytes representing the size of the file
       */
      size: z.number(),
      /**
       * An integer representing the order of this file when displayed
       */
      sort: z.number(),
      /**
       * The status of the file. Either `draft` or `published`
       */
      status: z.enum(["draft", "published"]),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updatedAt: z.string().datetime(),
      /**
       * The ID of the variant this file belongs to
       */
      variant_id: z.number(),
      /**
       * The software version of this file (if one exists, e.g. `1.0.0`)
       */
      version: z.string().transform(Number).nullable(),
    }),
    type: z.literal(DataType.enum.files),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/files#the-file-object
 */
export const FilesSchema = defineLemonSqueezySchema(
  z.array(FileSchema.shape.data)
);

export const FilesParamsSchema = z.object({
  /**
   * Only return files belonging to the variant with this ID
   */
  variant_id: z.string().optional(),
});

export const FileParamsSchema = z.object({
  id: z.string(),
});
