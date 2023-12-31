import { Character, CharacterForge } from "../src/index";
import { isCharacter } from "./utils/util";

describe("character-forge", () => {
  test("should generate a fully random character", () => {
    const forge = new CharacterForge();
    const character: Character = forge.forge();

    expect(isCharacter(character)).toBeTruthy();
    expect(character.seed).not.toEqual(0);
  });

  test("should generate a specific character", () => {
    const seed = 0.4520848700776696;
    const forge = new CharacterForge(seed);
    const character: Character = forge.forge();

    expect(isCharacter(character)).toBeTruthy();
    expect(character.seed).toEqual(seed);
    expect(character.name).toBe("Kevin");
    expect(character.nickname).toBe("Kev");
    expect(character.surname).toBe("Rodriguez");
    expect(character.sex).toBe("male");
    expect(character.age).toEqual(30);
  });
});
