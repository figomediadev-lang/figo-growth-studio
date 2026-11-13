import { describe, expect, it } from "vitest";
import { filmsInCategory, reels } from "@/lib/content";

describe("Film presentation", () => {
  it("retains the original landscape dimensions for the event film", () => {
    const film = reels.find((item) => item.id === "stage");
    expect([film?.width, film?.height]).toEqual([1024, 576]);
  });
  it("shows only portrait films in Reels", () => {
    expect(filmsInCategory("Reels")).toHaveLength(7);
    expect(filmsInCategory("Reels").every((film) => film.height > film.width)).toBe(true);
  });
  it.each([ ["Events", "stage"], ["Motorsport", "motorsport"], ["Real Estate", "property"] ] as const)("keeps %s films under their own category", (category, id) => {
    expect(filmsInCategory(category).map((film) => film.id)).toEqual([id]);
  });
  it("shows every film in the complete collection", () => {
    expect(filmsInCategory("All films")).toHaveLength(8);
  });
});