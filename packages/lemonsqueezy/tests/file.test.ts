import { describe, it, expect } from "vitest";

import { DataType } from "../src/_shared.validators";
import { FileSchema, FilesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("Lemon Squeezy - File", () => {
  const client = useTestClient();

  it("GET - /files", async () => {
    const files = await client("/files", "GET");

    expect(files).toBeDefined();
    expect(files.data).toBeDefined();
    expect(files.data.length).toBeGreaterThanOrEqual(1);
    expect(files.data.at(0)).toBeDefined();
    expect(files.data.at(0)?.type).toBe(DataType.enum.files);
    expect(files.errors).toBeUndefined();

    expect(FilesSchema.safeParse(files).success).toBe(true);
  });

  it("GET - /files/:id", async () => {
    const files = await client("/files", "GET");
    const file = await client(`/files/:id`, "GET", {
      id: files.data.at(0)!.id,
    });

    expect(file).toBeDefined();
    expect(file.data).toBeDefined();
    expect(file.data.type).toBe(DataType.enum.files);
    expect(file.errors).toBeUndefined();

    expect(FilesSchema.safeParse(files).success).toBe(true);
    expect(FileSchema.safeParse(file).success).toBe(true);
  });
});
