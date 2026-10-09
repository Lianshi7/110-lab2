import { describe, it, expect } from "vitest";
import { music } from "./music";

describe("music", () => {
    it("should have at least 3 items", () => {
        expect(music.length).toBeGreaterThanOrEqual(3);
    });

    it("should include 'Pop'", () => {
        expect(music).toContain("Pop");
    });
});