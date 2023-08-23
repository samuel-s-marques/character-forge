import { EyeColor, EyeColorsModule } from "./modules/eyecolors";
import { HairColor, HairColorsModule } from "./modules/haircolors";
import { HairStyle, HairStylesModule } from "./modules/hairstyles";
import { Name, NamesModule } from "./modules/names";
import { Occupation, OccupationsModule } from "./modules/occupations";
import {
  PersonalityTrait,
  PersonalityTraitModule,
} from "./modules/personalitytraits";
import { Sex, SexesModule } from "./modules/sexes";
import { Surname, SurnamesModule } from "./modules/surnames";

interface Character {
  name: Name;
  surname: Surname;
  sex: Sex;
  hairColor: HairColor;
  eyeColor: EyeColor;
  hairStyle: HairStyle;
  occupation: Occupation;
  personalityTraits: PersonalityTrait[];
}

class CharacterForge {
  private namesModule: NamesModule;
  private surnamesModule: SurnamesModule;
  private sexesModule: SexesModule;
  private hairColorsModule: HairColorsModule;
  private eyeColorsModule: EyeColorsModule;
  private hairStylesModule: HairStylesModule;
  private occupationsModule: OccupationsModule;
  private personalityTraitsModule: PersonalityTraitModule;

  constructor() {
    this.namesModule = new NamesModule();
    this.surnamesModule = new SurnamesModule();
    this.sexesModule = new SexesModule();
    this.hairColorsModule = new HairColorsModule();
    this.eyeColorsModule = new EyeColorsModule();
    this.hairStylesModule = new HairStylesModule();
    this.occupationsModule = new OccupationsModule();
    this.personalityTraitsModule = new PersonalityTraitModule();
  }

  public forge(): Character {
    const sex = this.sexesModule.getRandomSex();
    const name = this.namesModule.getRandomName(sex);
    const surname = this.surnamesModule.getRandomSurname();
    const hairColor = this.hairColorsModule.getRandomHairColor();
    const eyeColor = this.eyeColorsModule.getRandomEyeColor();
    const hairStyle = this.hairStylesModule.getRandomHairStyle();
    const occupation = this.occupationsModule.getRandomOccupation();
    const personalityTraits = this.personalityTraitsModule.pickRandomTrait(5);

    const character: Character = {
      name,
      surname,
      sex,
      hairColor,
      eyeColor,
      hairStyle,
      occupation,
      personalityTraits,
    };

    return character;
  }
}

export default CharacterForge;
