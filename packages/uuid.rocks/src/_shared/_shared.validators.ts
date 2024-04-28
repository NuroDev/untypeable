import { z } from "zod";

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

/** @see https://github.com/colinhacks/zod/pull/2364 */
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
export const NanoIDSchema = z.string().regex(nanoidRegex, "Must be a NANOID");

export const UUIDSchema = z.union([
  StandardUUIDSchema,
  ReadableUUIDSchema,
  ShortUUIDSchema,
  ULIDSchema,
  NanoIDSchema,
]);

// TODO(@nurodev): Implement global search params once I have time to narrow down each endpoints support for each param.
export const GlobalParamsSchema = z.object({});
