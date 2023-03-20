import { describe, it, expect } from "vitest";

import {
  CommentsSchema,
  CreatedTodoSchema,
  TodoSchema,
  TodosSchema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("JSONPlaceholder - Todo", () => {
  const client = useTestClient();

  it("GET - /todos", async () => {
    const todos = await client("/todos", "GET");

    expect(todos).toBeDefined();
    expect(Array.isArray(todos)).toBe(true);
    expect(todos.at(0)).toBeDefined();
    expect(todos.at(0)?.completed).toBeDefined();
    expect(todos.at(0)?.completed).toBeTypeOf("boolean");
    expect(todos.at(0)?.id).toBeDefined();
    expect(todos.at(0)?.id).toBeTypeOf("number");
    expect(todos.at(0)?.title).toBeDefined();
    expect(todos.at(0)?.title).toBeTypeOf("string");
    expect(todos.at(0)?.userId).toBeDefined();
    expect(todos.at(0)?.userId).toBeTypeOf("number");

    expect(TodosSchema.safeParse(todos).success).toBe(true);
  });

  it("POST - /todos", async () => {
    const completed = true;
    const title = "Hello todos";
    const createdTodo = await client("/todos", "POST", {
      completed,
      title,
    });

    expect(createdTodo).toBeDefined();
    expect(createdTodo.id).toBeDefined();
    expect(createdTodo.id).toBeTypeOf("number");
    expect(createdTodo.completed).toBeDefined();
    expect(createdTodo.completed).toBeTypeOf("boolean");
    expect(createdTodo.completed).toBe(completed);
    expect(createdTodo.title).toBeDefined();
    expect(createdTodo.title).toBeTypeOf("string");
    expect(createdTodo.title).toBe(title);

    expect(CreatedTodoSchema.safeParse(createdTodo).success).toBe(true);
  });

  it("GET - /todos/:id", async () => {
    const todo = await client("/todos/:id", "GET", {
      id: 1,
    });

    expect(todo).toBeDefined();
    expect(todo.completed).toBeDefined();
    expect(todo.completed).toBeTypeOf("boolean");
    expect(todo.id).toBeDefined();
    expect(todo.id).toBeTypeOf("number");
    expect(todo.title).toBeDefined();
    expect(todo.title).toBeTypeOf("string");
    expect(todo.userId).toBeDefined();
    expect(todo.userId).toBeTypeOf("number");

    expect(TodoSchema.safeParse(todo).success).toBe(true);
  });

  it("GET - /todos/:id/comments", async () => {
    const comments = await client("/todos/:id/comments", "GET", {
      id: 1,
    });

    expect(comments).toBeDefined();
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.at(0)).toBeDefined();
    expect(comments.at(0)?.body).toBeDefined();
    expect(comments.at(0)?.body).toBeTypeOf("string");
    expect(comments.at(0)?.email).toBeDefined();
    expect(comments.at(0)?.email).toBeTypeOf("string");
    expect(comments.at(0)?.id).toBeDefined();
    expect(comments.at(0)?.id).toBeTypeOf("number");
    expect(comments.at(0)?.name).toBeDefined();
    expect(comments.at(0)?.name).toBeTypeOf("string");
    expect(comments.at(0)?.postId).toBeDefined();
    expect(comments.at(0)?.postId).toBeTypeOf("number");

    expect(CommentsSchema.safeParse(comments).success).toBe(true);
  });
});
