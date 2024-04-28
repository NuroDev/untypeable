import { initUntypeable } from "untypeable";

import { GlobalParamsSchema } from "./_shared/_shared.validators";
import { EmojiSchema, EmojiJsonSchema } from "./emoji/emoji.validators";
import {
  JsonBulkParamsSchema,
  JsonBulkSchema,
  JsonMapParamsSchema,
  JsonMapSchema,
  JsonSchema,
} from "./json/json.validators";
import { NanoIDSchema, NanoIdParamsSchema } from "./nanoid/nanoid.validators";
import {
  PlainSchema,
  PlainBulkParamsSchema,
  PlainBulkSchema,
  PlainNamespaceMapParamsSchema,
  PlainNamespaceMapSchema,
  PlainMapParamsSchema,
  PlainMapSchema,
} from "./plain/plain.validators";
import { StatsSchema } from "./stats/stats.validators";

const u = initUntypeable();

export const uuidRocksSafeRouter = u.router({
  /** Gets a uuid as plain text */
  "/api/uuid/emoji": u.output(EmojiSchema),

  /** Gets single uuid with JSON output */
  "/api/uuid/emoji?json": u.output(EmojiJsonSchema),

  /** Gets single uuid with JSON output */
  "/json": u.input(GlobalParamsSchema).output(JsonSchema),

  /** Gets uuids in bulk (up to 20k) with JSON output */
  "/json/bulk": u.input(JsonBulkParamsSchema).output(JsonBulkSchema),

  /** Maps a key to the same UUID every time (in the “default” namespace) */
  "/json/map/:key": u.input(JsonMapParamsSchema).output(JsonMapSchema),

  /** Gets single NANOID in plaintext */
  "/nanoid": u.input(NanoIdParamsSchema).output(NanoIDSchema),

  /** Gets single UUID in plaintext */
  "/plain": u.input(GlobalParamsSchema).output(PlainSchema),

  /** Gets uuids in bulk (up to 20k) in plaintext */
  "/plain/bulk": u.input(PlainBulkParamsSchema).output(PlainBulkSchema),

  /** Maps a namespace/key combo to the same UUID every time */
  "/plain/map/:namespace/:key": u
    .input(PlainNamespaceMapParamsSchema)
    .output(PlainNamespaceMapSchema),

  /** Maps a key to the same UUID every time (in the “default” namespace) */
  "/plain/map/:key": u.input(PlainMapParamsSchema).output(PlainMapSchema),

  /** Gets single Short UUID in plaintext */
  "/s": u.input(GlobalParamsSchema).output<string>(),

  /** Gets single Short UUID in plaintext */
  "/short": u.input(GlobalParamsSchema).output<string>(),

  /** Gets some stats about service usage, tracked via [countapi.xyz](https://countapi.xyz/) */
  "/stats": u.output(StatsSchema),

  /** Gets single ULID in plaintext */
  "/ulid": u.input(GlobalParamsSchema).output<string>(),
});
