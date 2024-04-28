import { initUntypeable } from "untypeable";

import type { GlobalParams } from "./types";
import type { Emoji, EmojiJson } from "./emoji/emoji.types";
import type {
  Json,
  JsonBulk,
  JsonBulkParams,
  JsonMap,
  JsonMapParams,
} from "./json/json.types";
import type { NanoID, NanoIDParams } from "./nanoid/nanoid.types";
import type { PingPong, PingPongJson } from "./ping-pong/ping-pong.types";
import type {
  Plain,
  PlainBulk,
  PlainBulkParams,
  PlainMap,
  PlainMapParams,
  PlainNamespaceMap,
  PlainNamespaceMapParams,
} from "./plain/plain.types";
import type { Stats } from "./stats/stats.types";

const u = initUntypeable();

const router = u.router({
  /** Gets a uuid as plain text */
  "/api/uuid/emoji": u.output<Emoji>(),

  /** Gets single uuid with JSON output */
  "/api/uuid/emoji?json": u.output<EmojiJson>(),

  /** Responds with ‘pong’ or ‘ping’ */
  "/api/ping": u.output<PingPong>(),

  /** Responds with ‘pong’ or ‘ping’ in JSON format with some info about your request */
  "/api/ping?json": u.output<PingPongJson>(),

  /** Gets single uuid with JSON output */
  "/json": u.input<GlobalParams>().output<Json>(),

  /** Gets uuids in bulk (up to 20k) with JSON output */
  "/json/bulk": u.input<JsonBulkParams>().output<JsonBulk>(),

  /** Maps a key to the same UUID every time (in the “default” namespace) */
  "/json/map/:key": u.input<JsonMapParams>().output<JsonMap>(),

  /** Gets single NANOID in plaintext */
  "/nanoid": u.input<NanoIDParams>().output<NanoID>(),

  /** Gets single UUID in plaintext */
  "/plain": u.input<GlobalParams>().output<Plain>(),

  /** Gets uuids in bulk (up to 20k) in plaintext */
  "/plain/bulk": u.input<PlainBulkParams>().output<PlainBulk>(),

  /** Maps a namespace/key combo to the same UUID every time */
  "/plain/map/:namespace/:key": u
    .input<PlainNamespaceMapParams>()
    .output<PlainNamespaceMap>(),

  /** Maps a key to the same UUID every time (in the “default” namespace) */
  "/plain/map/:key": u.input<PlainMapParams>().output<PlainMap>(),

  /** Gets single Short UUID in plaintext */
  "/s": u.input<GlobalParams>().output<string>(),

  /** Gets single Short UUID in plaintext */
  "/short": u.input<GlobalParams>().output<string>(),

  /** Gets some stats about service usage, tracked via [countapi.xyz](https://countapi.xyz/) */
  "/stats": u.output<Stats>(),

  /** Gets single ULID in plaintext */
  "/ulid": u.input<GlobalParams>().output<string>(),
});

export type UUIDRocksRouter = typeof router;
