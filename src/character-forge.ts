import { EyeColor, EyeColorsModule } from "./modules/eyecolors";
import { HairColor, HairColorsModule } from "./modules/haircolors";
import { HairStyle, HairStylesModule } from "./modules/hairstyles";
import { Name, NamesModule } from "./modules/names";
import { Sex, SexesModule } from "./modules/sexes";

interface Character {
  name: Name;
  sex: Sex;
  hairColor: HairColor;
  eyeColor: EyeColor;
  hairStyle: HairStyle;
}

class CharacterForge {
  private namesModule: NamesModule;
  private sexesModule: SexesModule;
  private hairColorsModule: HairColorsModule;
  private eyeColorsModule: EyeColorsModule;
  private hairStylesModule: HairStylesModule;

  constructor() {
    this.namesModule = new NamesModule();
    this.sexesModule = new SexesModule();
    this.hairColorsModule = new HairColorsModule();
    this.eyeColorsModule = new EyeColorsModule();
    this.hairStylesModule = new HairStylesModule();
  }

  public forge(): Character {
    const sex = this.sexesModule.getRandomSex();
    const name = this.namesModule.getRandomName(sex);
    const hairColor = this.hairColorsModule.getRandomHairColor();
    const eyeColor = this.eyeColorsModule.getRandomEyeColor();
    const hairStyle = this.hairStylesModule.getRandomHairStyle();

    const character: Character = {
      sex,
      name,
      hairColor,
      eyeColor,
      hairStyle,
    };

    return character;
  }
}

export default CharacterForge;
