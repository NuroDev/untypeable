import type { z } from "zod";

import type {
  PayloadSchema,
  PayloadsSchema,
  PayloadParamsSchema,
} from "./payloads.validators";

export type Payload = z.infer<typeof PayloadSchema>;

export type Payloads = z.infer<typeof PayloadsSchema>;

export type PayloadParams = z.infer<typeof PayloadParamsSchema>;
