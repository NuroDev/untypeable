import { describe, it, expect } from "vitest";

import { DataType } from "../_shared/_shared.types";
import { UserSchema } from "./user.validators";
import { useTestClient } from "../_shared/_shared.util";

describe.concurrent("Lemon Squeezy - User", () => {
  const client = useTestClient();

  it("GET - /users/me", async () => {
    const user = await client("/users/me", "GET");

    expect(user).toBeDefined();
    expect(user.data).toBeDefined();
    expect(user.data.type).toBe(DataType.users);
    expect(user.errors).toBeUndefined();

    expect(UserSchema.safeParse(user).success).toBe(true);
  });
});
