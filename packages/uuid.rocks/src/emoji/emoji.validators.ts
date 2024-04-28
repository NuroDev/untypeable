import { z } from "zod";

// Note: We cannot use `z.string().uuid()` here because the emojis fail the regex pattern match.
export const EmojiSchema = z.string();

export const EmojiJsonSchema = z.object({
  apiVersion: z.string(),
  uuid: z.string(),
  timestamp: z.coerce.date(),
});
