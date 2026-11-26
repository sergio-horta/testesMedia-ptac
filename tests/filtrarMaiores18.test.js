import { describe, it, expect } from "vitest";
import { filtrarMaiores18 } from "../src/filtrarMaiores18.js";

describe("filtrarMaiores18", () => {
  const usuarios = [
    { name: "Ana", age: 22 },
    { name: "Beto", age: 17 },
    { name: "Carla", age: 30 },
  ];

  it("filtra usuários com idade maior ou igual a 18", () => {
    expect(filtrarMaiores18(usuarios)).toEqual([
      { name: "Ana", age: 22 },
      { name: "Carla", age: 30 },
    ]);
  });

});