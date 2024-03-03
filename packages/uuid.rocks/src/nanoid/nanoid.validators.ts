import { z } from "zod";

import { GlobalParamsSchema } from "../_shared/_shared.validators";

/** @see https://github.com/colinhacks/zod/pull/2364 */
export const nanoidRegex = /^[a-z0-9_-]{21}$/i;

export const NanoIdParamsSchema = GlobalParamsSchema;
export const NanoIDSchema = z.string().regex(nanoidRegex);
