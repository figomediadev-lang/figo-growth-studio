import { describe, expect, it } from "vitest";
import { filmGroups, filmsInCategory, reels } from "@/lib/content";

describe("Film presentation", () => {
  it("retains the original landscape dimensions for the event film", () => {
    const film = reels.find((item) => item.id === "stage");
    expect([film?.width, film?.height]).toEqual([1024, 576]);
  });
  it("shows only portrait films in Reels", () => {
    expect(filmsInCategory("Reels")).toHaveLength(12);
    expect(filmsInCategory("Reels").every((film) => film.height > film.width)).toBe(true);
  });
  it.each([ ["Motorsport", "motorsport"], ["Real Estate", "property"] ] as const)("keeps %s films under their own category", (category, id) => {
    expect(filmsInCategory(category).map((film) => film.id)).toEqual([id]);
  });
  it("shows every film in the complete collection", () => {
    expect(filmsInCategory("All films")).toHaveLength(17);
  });
  it("keeps all nine uploaded films in their subject categories", () => {
    expect(filmsInCategory("Commercials").map((film) => film.id)).toEqual(["kitchen", "m2"]);
    expect(filmsInCategory("Events").map((film) => film.id)).toEqual(["hunterhood", "human-development", "mc-live", "live-sessions", "school-visit", "stage"]);
    expect(filmsInCategory("Social Content").map((film) => film.id)).toContain("arunima");
    expect(filmsInCategory("Brand Stories").map((film) => film.id)).toContain("katea-stories");
  });
  it("shows each film exactly once in the grouped archive", () => {
    const ids = filmGroups.flatMap((group) => filmsInCategory(group.category).map((film) => film.id));
    expect(ids).toHaveLength(17);
    expect(new Set(ids).size).toBe(17);
  });
  it.each([
    ["kitchen", 608, 1080], ["arunima", 608, 1080], ["human-development", 1280, 720],
    ["hunterhood", 1920, 1080], ["katea-stories", 406, 720], ["m2", 1080, 608],
    ["mc-live", 608, 1080], ["live-sessions", 608, 1080], ["school-visit", 1280, 720],
  ])("preserves uploaded dimensions for %s", (id, width, height) => {
    const film = reels.find((item) => item.id === id);
    expect([film?.width, film?.height]).toEqual([width, height]);
  });
});