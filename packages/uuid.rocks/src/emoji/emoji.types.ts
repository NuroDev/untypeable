import type { z } from "zod";

import type { EmojiJsonSchema, EmojiSchema } from "./emoji.validators";

export type Emoji = z.infer<typeof EmojiSchema>;

export type EmojiJson = z.infer<typeof EmojiJsonSchema>;
