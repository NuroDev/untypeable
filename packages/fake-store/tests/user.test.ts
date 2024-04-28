import { describe, it, expect } from "vitest";

import {
  CreateUserSchema,
  UpdateUserSchema,
  UserSchema,
  UsersSchema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe("fakestoreapi.com - user", () => {
  const client = useTestClient();

  describe("DELETE", () => {
    it("/users/:id", async () => {
      const deletedUser = await client("DELETE", "/users/:id", {
        id: 1,
      });

      expect(deletedUser).toMatchSnapshot();
      expect(UserSchema.safeParse(deletedUser).success).toBe(true);
    });
  });

  describe("GET", () => {
    it("/users", async () => {
      const users = await client("GET", "/users");

      expect(users).toMatchSnapshot();
      expect(UsersSchema.safeParse(users).success).toBe(true);
    });

    it("/users?limit=2", async () => {
      const limitedUsers = await client("GET", "/users", { limit: 2 });

      expect(limitedUsers).toMatchSnapshot();
      expect(limitedUsers).toHaveLength(2);
      expect(UsersSchema.safeParse(limitedUsers).success).toBe(true);
    });

    it("/users?order=desc", async () => {
      const orderedUsers = await client("GET", "/users", {
        order: "desc",
      });

      expect(orderedUsers).toMatchSnapshot();
      expect(UsersSchema.safeParse(orderedUsers).success).toBe(true);
    });

    it("/users?limit=1&order=desc", async () => {
      const users = await client("GET", "/users", {
        limit: 1,
        order: "desc",
      });

      expect(users).toMatchSnapshot();
      expect(users).toHaveLength(1);
      expect(UsersSchema.safeParse(users).success).toBe(true);
    });

    it("/users/:id", async () => {
      const user = await client("GET", "/users/:id", {
        id: 1,
      });

      expect(user).toMatchSnapshot();
      expect(UserSchema.safeParse(user).success).toBe(true);
    });
  });

  describe("PATCH", () => {
    it("/users/:id", async () => {
      const updatedUser = await client("PATCH", "/users/:id", {
        id: 2,
      });

      expect(updatedUser).toMatchSnapshot();
      expect(UpdateUserSchema.safeParse(updatedUser).success).toBe(true);
    });
  });

  describe("POST", () => {
    it("/users", async () => {
      const newUser = await client("POST", "/users", {
        address: {
          city: "kilcoole",
          geolocation: {
            lat: -37.3159,
            long: 81.1496,
          },
          number: 3,
          street: "7835 new road",
          zipcode: "12926-3874",
        },
        email: "John@gmail.com",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        password: "m38rmF$",
        phone: "1-570-236-7033",
        username: "johnd",
      });

      expect(newUser).toMatchSnapshot();
      expect(CreateUserSchema.safeParse(newUser).success).toBe(true);
    });
  });

  describe("PUT", () => {
    it("/users/:id", async () => {
      const updatedUser = await client("PUT", "/users/:id", {
        id: 1,
      });

      expect(updatedUser).toMatchSnapshot();
      expect(UpdateUserSchema.safeParse(updatedUser).success).toBe(true);
    });
  });
});
