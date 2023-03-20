import { z } from "zod";

export const TodoSchema = z.object({
  completed: z.boolean(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export const TodosSchema = z.array(TodoSchema);

export const TodoParamsSchema = z.object({
  id: z.number(),
});

export const TodosParamsSchema = TodoSchema.partial();
