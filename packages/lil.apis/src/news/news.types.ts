import type { z } from "zod";

import type { ArticleSchema, NewsSchema } from "./news.validators";

export type Article = z.infer<typeof ArticleSchema>;

export type News = z.infer<typeof NewsSchema>;
