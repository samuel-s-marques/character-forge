import { Character } from "../../src";

export function isCharacter(object: any): object is Character {
    return 'name' in object && 'sexuality' in object;
}