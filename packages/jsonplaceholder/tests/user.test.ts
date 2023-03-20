import { describe, it, expect } from "vitest";

import { CommentsSchema, UserSchema, UsersSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("JSONPlaceholder - User", () => {
  const client = useTestClient();

  it("GET - /users", async () => {
    const users = await client("/users", "GET");

    expect(users).toBeDefined();
    expect(Array.isArray(users)).toBe(true);
    expect(users.at(0)).toBeDefined();
    expect(users.at(0)?.address).toBeDefined();
    expect(users.at(0)?.address).toBeTypeOf("object");
    expect(users.at(0)?.address.city).toBeDefined();
    expect(users.at(0)?.address.city).toBeTypeOf("string");
    expect(users.at(0)?.address.geo.lat).toBeDefined();
    expect(users.at(0)?.address.geo.lat).toBeTypeOf("string");
    expect(users.at(0)?.address.geo.lng).toBeDefined();
    expect(users.at(0)?.address.geo.lng).toBeTypeOf("string");
    expect(users.at(0)?.address.street).toBeDefined();
    expect(users.at(0)?.address.street).toBeTypeOf("string");
    expect(users.at(0)?.address.suite).toBeDefined();
    expect(users.at(0)?.address.suite).toBeTypeOf("string");
    expect(users.at(0)?.address.zipcode).toBeDefined();
    expect(users.at(0)?.address.zipcode).toBeTypeOf("string");
    expect(users.at(0)?.company).toBeDefined();
    expect(users.at(0)?.company).toBeTypeOf("object");
    expect(users.at(0)?.company.bs).toBeDefined();
    expect(users.at(0)?.company.bs).toBeTypeOf("string");
    expect(users.at(0)?.company.catchPhrase).toBeDefined();
    expect(users.at(0)?.company.catchPhrase).toBeTypeOf("string");
    expect(users.at(0)?.company.name).toBeDefined();
    expect(users.at(0)?.company.name).toBeTypeOf("string");
    expect(users.at(0)?.email).toBeDefined();
    expect(users.at(0)?.email).toBeTypeOf("string");
    expect(users.at(0)?.id).toBeDefined();
    expect(users.at(0)?.id).toBeTypeOf("number");
    expect(users.at(0)?.name).toBeDefined();
    expect(users.at(0)?.name).toBeTypeOf("string");
    expect(users.at(0)?.phone).toBeDefined();
    expect(users.at(0)?.phone).toBeTypeOf("string");
    expect(users.at(0)?.username).toBeDefined();
    expect(users.at(0)?.username).toBeTypeOf("string");
    expect(users.at(0)?.website).toBeDefined();
    expect(users.at(0)?.website).toBeTypeOf("string");

    expect(UsersSchema.safeParse(users).success).toBe(true);
  });

  it("GET - /users/:id", async () => {
    const user = await client("/users/:id", "GET", {
      id: 1,
    });

    expect(user).toBeDefined();
    expect(user.address).toBeDefined();
    expect(user.address).toBeTypeOf("object");
    expect(user.address.city).toBeDefined();
    expect(user.address.city).toBeTypeOf("string");
    expect(user.address.geo.lat).toBeDefined();
    expect(user.address.geo.lat).toBeTypeOf("string");
    expect(user.address.geo.lng).toBeDefined();
    expect(user.address.geo.lng).toBeTypeOf("string");
    expect(user.address.street).toBeDefined();
    expect(user.address.street).toBeTypeOf("string");
    expect(user.address.suite).toBeDefined();
    expect(user.address.suite).toBeTypeOf("string");
    expect(user.address.zipcode).toBeDefined();
    expect(user.address.zipcode).toBeTypeOf("string");
    expect(user.company).toBeDefined();
    expect(user.company).toBeTypeOf("object");
    expect(user.company.bs).toBeDefined();
    expect(user.company.bs).toBeTypeOf("string");
    expect(user.company.catchPhrase).toBeDefined();
    expect(user.company.catchPhrase).toBeTypeOf("string");
    expect(user.company.name).toBeDefined();
    expect(user.company.name).toBeTypeOf("string");
    expect(user.email).toBeDefined();
    expect(user.email).toBeTypeOf("string");
    expect(user.id).toBeDefined();
    expect(user.id).toBeTypeOf("number");
    expect(user.name).toBeDefined();
    expect(user.name).toBeTypeOf("string");
    expect(user.phone).toBeDefined();
    expect(user.phone).toBeTypeOf("string");
    expect(user.username).toBeDefined();
    expect(user.username).toBeTypeOf("string");
    expect(user.website).toBeDefined();
    expect(user.website).toBeTypeOf("string");

    expect(UserSchema.safeParse(user).success).toBe(true);
  });

  it("GET - /users/:id/comments", async () => {
    const comments = await client("/users/:id/comments", "GET", {
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
