import { describe, expect, it } from "vitest";
import { filmCategories, filmGroups, filmsInCategory, packages, reels } from "@/lib/content";

const ids = (c: Parameters<typeof filmsInCategory>[0]) => filmsInCategory(c).map((f) => f.id);

describe("Film collection", () => {
  it("orders categories Automotives, Events, Brand Stories, Social Content, Real Estate", () => {
    expect(filmGroups.map((g) => g.category)).toEqual(["Automotives", "Events", "Brand Stories", "Social Content", "Real Estate"]);
    expect(filmCategories).not.toContain("Commercials" as never);
    expect(filmCategories).not.toContain("Motorsport" as never);
  });
  it("puts M2 in Automotives", () => expect(ids("Automotives")).toEqual(["motorsport", "m2"]));
  it("drops Human Development and renames MC to Live Program", () => {
    expect(ids("Events")).not.toContain("human-development");
    expect(reels.find((f) => f.id === "mc-live")?.title).toBe("Live Program");
  });
  it("orders Brand Stories as requested", () =>
    expect(ids("Brand Stories")).toEqual(["forsyntax", "tenxm", "story", "brand", "yellowbee", "katea-stories", "darshu"]));
  it("reverses Social Content and ends with From the kitchen", () =>
    expect(ids("Social Content")).toEqual(["fitness", "restaurant", "food", "arunima", "kitchen"]));
  it.each([["property", 1280, 720], ["mc-live", 1920, 1080], ["m2", 1080, 608], ["hunterhood", 1920, 1080]])(
    "shows %s as upright landscape", (id, w, h) => {
      const f = reels.find((x) => x.id === id);
      expect([f?.width, f?.height]).toEqual([w, h]);
    });
  it("lists each film once in the grouped archive", () => {
    const all = filmGroups.flatMap((g) => ids(g.category));
    expect(all).toHaveLength(reels.length);
    expect(new Set(all).size).toBe(reels.length);
  });
});

describe("Social media packages", () => {
  it("prices Basic 5,000, Plus 7,000, Premium 10,000", () =>
    expect(packages.map((p) => [p.name, p.price])).toEqual([["Basic", "5,000"], ["Plus", "7,000"], ["Premium", "10,000"]]));
});
