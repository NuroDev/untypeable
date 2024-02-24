import { z } from "zod";

import { nanoidRegex } from "../nanoid/nanoid.validators";

const StandardUUIDSchema = z.string().uuid();
export const ReadableUUIDSchema = z
  .string()
  .regex(
    /^(?:[A-Z][a-z]+){2,4}$/,
    "Must be a grammatically correct Shakespearean sentence"
  );
export const ShortUUIDSchema = z
  .string()
  .regex(/^[0-9A-Za-z]{22}$/, "Must be a Short UUID");
export const ULIDSchema = z
  .string()
  .regex(/^[0-9A-Za-z]{26}$/, "Must be a ULID");
export const NanoIDSchema = z.string().regex(nanoidRegex, "Must be a NANOID");
export const UUIDSchema = z.union([
  StandardUUIDSchema,
  ReadableUUIDSchema,
  ShortUUIDSchema,
  ULIDSchema,
  NanoIDSchema,
]);

export const GlobalParamsSchema = z
  .object({
    /** Uses the [nanoid](https://www.npmjs.com/package/nanoid) package to generate ID’s. Supports &len= param to adjust ID length. If this is not a number it will be silently ignored. If used in combonation with bulk api, may fail if len is too long. */
    nanoid: z.boolean(),

    /** Switches from standard uuidv4 format to [Readable UUIDs](https://github.com/Debdut/uuid-readable), that are Shakespearean grammatically correct sentences. */
    readable: z.boolean(),

    /** Switches from standard UUIDv4 to a [Short ID](https://www.npmjs.com/package/short-uuid). These ID’s are converted from UUIDv4 ID’s so they are just as unique & colission free. */
    short: z.boolean(),

    /**
     * Uses the [ulidx](https://www.npmjs.com/package/ulidx) package to generate ULID’s.
     *
     * Eg. 01FB0CCPD8R0H9KAJBFQJDFYJB
     */
    ulid: z.boolean(),
  })
  .partial();
