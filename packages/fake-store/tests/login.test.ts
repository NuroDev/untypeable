import { describe, it, expect } from "vitest";

import { LoginSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe("fakestoreapi.com - login", () => {
  const client = useTestClient();

  describe("POST", () => {
    it("/users", async () => {
      const auth = await client("POST", "/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      });

      expect(auth).toBeDefined();
      expect(auth.token).toBeDefined();
      expect(auth.token).toBeTypeOf("string");

      expect(LoginSchema.safeParse(auth).success).toBe(true);
    });
  });
});
