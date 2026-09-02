import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "fs";
import path from "path";

describe("routing fallback and error state", () => {
  it("includes a redirect that serves the app for deep-linked routes", () => {
    const redirectsPath = path.resolve(__dirname, "../../public/_redirects");

    expect(existsSync(redirectsPath)).toBe(true);
    expect(readFileSync(redirectsPath, "utf-8")).toMatch(/\/\*\s+\/index\.html\s+200/i);
  });

  it("shows a user-friendly custom not-found state", () => {
    const notFoundPath = path.resolve(__dirname, "../pages/NotFound.tsx");
    const source = readFileSync(notFoundPath, "utf-8");

    expect(source).toMatch(/Oops!/i);
    expect(source).toMatch(/return to home|go home|home/i);
  });
});
