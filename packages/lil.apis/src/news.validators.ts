import { z } from "zod";

export const ArticleSchema = z.object({
  author: z.string().nullable(),
  date: z.string().datetime().nullable(),
  description: z.string().nullable(),
  image: z.string().url().nullable(),
  source: z.string().nullable(),
  title: z.string(),
  url: z.string().url(),
});

export const NewsSchema = z.object({
  articles: z.array(ArticleSchema),
});
