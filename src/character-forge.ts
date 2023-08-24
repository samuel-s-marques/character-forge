import { BodyType, BodyTypesModule } from "./modules/bodytypes";
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
import { SocialClass, SocialClassesModule } from "./modules/socialclasses";
import { Surname, SurnamesModule } from "./modules/surnames";

export interface Character {
  name: Name;
  surname: Surname;
  sex: Sex;
  hairColor: HairColor;
  eyeColor: EyeColor;
  hairStyle: HairStyle;
  bodyType: string;
  height: number;
  weight: number;
  occupation: Occupation;
  personalityTraits: PersonalityTrait[];
  socialClass: SocialClass;
}

export class CharacterForge {
  private namesModule: NamesModule;
  private surnamesModule: SurnamesModule;
  private sexesModule: SexesModule;
  private hairColorsModule: HairColorsModule;
  private eyeColorsModule: EyeColorsModule;
  private hairStylesModule: HairStylesModule;
  private occupationsModule: OccupationsModule;
  private personalityTraitsModule: PersonalityTraitModule;
  private socialClassModule: SocialClassesModule;
  private bodyTypeModule: BodyTypesModule;

  constructor() {
    this.namesModule = new NamesModule();
    this.surnamesModule = new SurnamesModule();
    this.sexesModule = new SexesModule();
    this.hairColorsModule = new HairColorsModule();
    this.eyeColorsModule = new EyeColorsModule();
    this.hairStylesModule = new HairStylesModule();
    this.occupationsModule = new OccupationsModule();
    this.personalityTraitsModule = new PersonalityTraitModule();
    this.socialClassModule = new SocialClassesModule();
    this.bodyTypeModule = new BodyTypesModule();
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
    const socialClass = this.socialClassModule.getRandomSocialClass();
    const bodyTypeData = this.bodyTypeModule.getRandomBodyType(sex);
    const bodyType = bodyTypeData.type;
    const height = bodyTypeData.height;
    const weight = bodyTypeData.weight;

    const character: Character = {
      name,
      surname,
      sex,
      hairColor,
      eyeColor,
      hairStyle,
      bodyType,
      height,
      weight,
      occupation,
      personalityTraits,
      socialClass,
    };

    return character;
  }
}
