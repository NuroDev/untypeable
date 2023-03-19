import type { z } from "zod";

import type {
  FileParamsSchema,
  FileSchema,
  FilesParamsSchema,
  FilesSchema,
} from "./file.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/files#the-file-object
 */
export type File = z.infer<typeof FileSchema>;

/**
 * @docs https://docs.lemonsqueezy.com/api/files#the-file-object
 */
export type Files = z.infer<typeof FilesSchema>;

export type FilesParams = z.infer<typeof FilesParamsSchema>;

export type FileParams = z.infer<typeof FileParamsSchema>;
