import type { z } from "zod";

import type {
  PingPongJsonSchema,
  PingPongSchema,
} from "./ping-pong.validators";

export type PingPong = z.infer<typeof PingPongSchema>;

export type PingPongJson = z.infer<typeof PingPongJsonSchema>;
