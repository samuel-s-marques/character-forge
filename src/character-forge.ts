import { Age, AgesModule } from "./modules/age";
import { BodyType, BodyTypesModule } from "./modules/bodytypes";
import { EthnicitiesModule, Ethnicity } from "./modules/ethnicities";
import { EyeColor, EyeColorsModule } from "./modules/eyecolors";
import { HairColor, HairColorsModule } from "./modules/haircolors";
import { HairStyle, HairStylesModule } from "./modules/hairstyles";
import { Hobbies, HobbiesModule } from "./modules/hobbies";
import { Name, NamesModule } from "./modules/names";
import { Occupation, OccupationsModule } from "./modules/occupations";
import {
  PersonalityTrait,
  PersonalityTraitModule,
} from "./modules/personalitytraits";
import { Sex, SexesModule } from "./modules/sexes";
import { SocialClass, SocialClassesModule } from "./modules/socialclasses";
import { Surname, SurnamesModule } from "./modules/surnames";
import { processFile } from "./utils/utils";

export interface Character {
  name: string;
  nickname: string;
  surname: Surname;
  sex: Sex;
  age: Age;
  hairColor: HairColor;
  eyeColor: EyeColor;
  hairStyle: HairStyle;
  bodyType: string;
  height: number;
  weight: number;
  ethnicity: Ethnicity;
  occupation: Occupation;
  personalityTraits: PersonalityTrait[];
  socialClass: SocialClass;
  hobbies: Hobbies;
}

export class CharacterForge {
  private namesModule: NamesModule;
  private surnamesModule: SurnamesModule;
  private sexesModule: SexesModule;
  private agesModule: AgesModule;
  private hairColorsModule: HairColorsModule;
  private eyeColorsModule: EyeColorsModule;
  private hairStylesModule: HairStylesModule;
  private occupationsModule: OccupationsModule;
  private personalityTraitsModule: PersonalityTraitModule;
  private socialClassesModule: SocialClassesModule;
  private bodyTypesModule: BodyTypesModule;
  private ethnicitiesModule: EthnicitiesModule;
  private hobbiesModule: HobbiesModule;

  constructor() {
    this.namesModule = new NamesModule();
    this.surnamesModule = new SurnamesModule();
    this.sexesModule = new SexesModule();
    this.agesModule = new AgesModule();
    this.hairColorsModule = new HairColorsModule();
    this.eyeColorsModule = new EyeColorsModule();
    this.hairStylesModule = new HairStylesModule();
    this.occupationsModule = new OccupationsModule();
    this.personalityTraitsModule = new PersonalityTraitModule();
    this.socialClassesModule = new SocialClassesModule();
    this.bodyTypesModule = new BodyTypesModule();
    this.ethnicitiesModule = new EthnicitiesModule();
    this.hobbiesModule = new HobbiesModule();
  }

  public forge(): Character {
    const sex = this.sexesModule.getRandomSex();
    const { name, nickname } = this.namesModule.getRandomName(sex);
    const surname = this.surnamesModule.getRandomSurname();
    const age = this.agesModule.getRandomAge(18, 50);
    const hairColor = this.hairColorsModule.getRandomHairColor();
    const eyeColor = this.eyeColorsModule.getRandomEyeColor();
    const hairStyle = this.hairStylesModule.getRandomHairStyle();
    const occupation = this.occupationsModule.getRandomOccupation();
    const personalityTraits = this.personalityTraitsModule.pickRandomTrait(5);
    const socialClass = this.socialClassesModule.getRandomSocialClass();
    const bodyTypeData = this.bodyTypesModule.getRandomBodyType(sex);
    const bodyType = bodyTypeData.type;
    const height = bodyTypeData.height;
    const weight = bodyTypeData.weight;
    const ethnicity = this.ethnicitiesModule.getRandomEthnicity();
    const hobbies = this.hobbiesModule.getRandomHobbies();

    const character: Character = {
      name,
      nickname,
      surname,
      sex,
      age,
      hairColor,
      eyeColor,
      hairStyle,
      bodyType,
      height,
      weight,
      ethnicity,
      occupation,
      personalityTraits,
      socialClass,
      hobbies,
    };

    return character;
  }
}
