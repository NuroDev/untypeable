import type { z } from "zod";

import type { IpJsonSchema, IpSchema } from "./ip.validators";

export type Ip = z.infer<typeof IpSchema>;

export type IpJson = z.infer<typeof IpJsonSchema>;
