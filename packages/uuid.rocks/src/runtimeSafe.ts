import { initUntypeable } from "untypeable";

import {
  JsonBulkParamsSchema,
  JsonBulkSchema,
  JsonMapParamsSchema,
  JsonMapSchema,
  JsonSchema,
} from "./json/json.validators";
import { NanoIDSchema } from "./nanoid/nanoid.validators";
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
  /** Gets single uuid with JSON output */
  "/json": u.output(JsonSchema),

  /** Gets uuids in bulk (up to 20k) with JSON output */
  "/json/bulk": u.input(JsonBulkParamsSchema).output(JsonBulkSchema),

  /** Maps a key to the same UUID every time (in the “default” namespace) */
  "/json/map/:key": u.input(JsonMapParamsSchema).output(JsonMapSchema),

  /** Gets single NANOID in plaintext */
  "/nanoid": u.output(NanoIDSchema),

  /** Gets single UUID in plaintext */
  "/plain": u.output(PlainSchema),

  /** Gets uuids in bulk (up to 20k) in plaintext */
  "/plain/bulk": u.input(PlainBulkParamsSchema).output(PlainBulkSchema),

  /** Maps a namespace/key combo to the same UUID every time */
  "/plain/map/:namespace/:key": u
    .input(PlainNamespaceMapParamsSchema)
    .output(PlainNamespaceMapSchema),

  /** Maps a key to the same UUID every time (in the “default” namespace) */
  "/plain/map/:key": u.input(PlainMapParamsSchema).output(PlainMapSchema),

  /** Gets single Short UUID in plaintext */
  "/s": u.output<string>(),

  /** Gets single Short UUID in plaintext */
  "/short": u.output<string>(),

  /** Gets some stats about service usage, tracked via [countapi.xyz](https://countapi.xyz/) */
  "/stats": u.output(StatsSchema),

  /** Gets single ULID in plaintext */
  "/ulid": u.output<string>(),
});
