import { describe, it } from "vitest";

import { PeopleSchema, PersonSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - People", () => {
  const client = useTestClient();

  it("GET - /people", async ({ expect }) => {
    const people = await client("/people");

    expect(people).toBeDefined();
    expect(people.count).toBeTypeOf("number");
    expect(people.next).toBeTypeOf("string");
    expect(people.next).not.toBe(null);
    expect(people.previous).toBe(null);
    expect(Array.isArray(people.results)).toBe(true);
    expect(people.results.length).toBeGreaterThan(0);
    expect(people.results.at(0)).toBeDefined();

    expect(PeopleSchema.safeParse(people).success).toBe(true);
  });

  it("GET - /people/:id", async ({ expect }) => {
    const person = await client("/people/:id", {
      id: 1,
    });

    expect(person).toBeDefined();
    expect(person).toMatchSnapshot();

    expect(PersonSchema.safeParse(person).success).toBe(true);
  });
});
