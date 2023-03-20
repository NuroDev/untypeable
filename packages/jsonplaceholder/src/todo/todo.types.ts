import type { z } from "zod";

import type {
  TodoParamsSchema,
  TodoSchema,
  TodosParamsSchema,
  TodosSchema,
} from "./todo.validators";

export type Todo = z.infer<typeof TodoSchema>;

export type Todos = z.infer<typeof TodosSchema>;

export type TodoParams = z.infer<typeof TodoParamsSchema>;

export type TodosParams = z.infer<typeof TodosParamsSchema>;
