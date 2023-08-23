import { Name, NamesModule } from "./modules/names";

interface Character {
  name: Name;
}

class CharacterForge {
  private namesModule: NamesModule;

  constructor() {
    this.namesModule = new NamesModule();
  }

  public forge(): Character {
    const character: Character = {
      name: this.namesModule.getRandomName("male"),
    };

    return character;
  }
}

export default CharacterForge
