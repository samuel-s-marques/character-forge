import * as mod from "./index";
import { splitmix32 } from "./utils/splitmix32";

export interface Character {
  seed: number;
  name: string;
  nickname: string | undefined;
  surname: string;
  sex: string;
  pronouns: mod.Pronoun;
  age: number;
  hairColor: string;
  eyeColor: string;
  hairStyle: string;
  bodyType: mod.BodyType;
  clothings: mod.Clothing;
  ethnicity: string;
  birthplace: string;
  sexuality: mod.Sexuality;
  occupation: string;
  phobia: string | undefined;
  personalityTraits: mod.PersonalityTrait[];
  socialClass: string;
  politicalView: string;
  hobbies: string[];
  alignment: string;
  summary: string;
}

export class CharacterForge {
  private seed: number;
  private namesModule: mod.NamesModule;
  private surnamesModule: mod.SurnamesModule;
  private sexesModule: mod.SexesModule;
  private pronounsModule: mod.PronounsModule;
  private agesModule: mod.AgesModule;
  private hairColorsModule: mod.HairColorsModule;
  private eyeColorsModule: mod.EyeColorsModule;
  private hairStylesModule: mod.HairStylesModule;
  private occupationsModule: mod.OccupationsModule;
  private personalityTraitsModule: mod.PersonalityTraitModule;
  private socialClassesModule: mod.SocialClassesModule;
  private bodyTypesModule: mod.BodyTypesModule;
  private ethnicitiesModule: mod.EthnicitiesModule;
  private sexualitiesModule: mod.SexualitiesModule;
  private hobbiesModule: mod.HobbiesModule;
  private alignmentsModule: mod.AlignmentsModule;
  private phobiasModule: mod.PhobiasModule;
  private politicsModule: mod.PoliticsModule;
  private clothingsModule: mod.ClothingsModule;
  private summariesModule: mod.SummariesModule;

  constructor(seed?: number) {
    if (seed === undefined) {
      const rng = new splitmix32();
      this.seed = rng.random() * Number.MAX_SAFE_INTEGER;
    } else {
      this.seed = seed;
    }

    this.namesModule = new mod.NamesModule(this.seed);
    this.surnamesModule = new mod.SurnamesModule(this.seed);
    this.sexesModule = new mod.SexesModule(this.seed);
    this.pronounsModule = new mod.PronounsModule();
    this.agesModule = new mod.AgesModule(this.seed);
    this.hairColorsModule = new mod.HairColorsModule(this.seed);
    this.eyeColorsModule = new mod.EyeColorsModule(this.seed);
    this.hairStylesModule = new mod.HairStylesModule(this.seed);
    this.occupationsModule = new mod.OccupationsModule(this.seed);
    this.personalityTraitsModule = new mod.PersonalityTraitModule(this.seed);
    this.socialClassesModule = new mod.SocialClassesModule(this.seed);
    this.bodyTypesModule = new mod.BodyTypesModule(this.seed);
    this.ethnicitiesModule = new mod.EthnicitiesModule(this.seed);
    this.sexualitiesModule = new mod.SexualitiesModule(this.seed);
    this.hobbiesModule = new mod.HobbiesModule(this.seed);
    this.alignmentsModule = new mod.AlignmentsModule(this.seed);
    this.phobiasModule = new mod.PhobiasModule(this.seed);
    this.politicsModule = new mod.PoliticsModule(this.seed);
    this.clothingsModule = new mod.ClothingsModule(this.seed);
    this.summariesModule = new mod.SummariesModule(this.seed);
  }

  public forge(): Character {
    const sex = this.sexesModule.getRandomSex();
    const { name, nickname } = this.namesModule.getRandomName(sex);
    const surname = this.surnamesModule.getRandomSurname();
    const pronouns = this.pronounsModule.getPronoun(sex);
    const age = this.agesModule.getRandomAge(18, 50);
    const hairColor = this.hairColorsModule.getRandomHairColor();
    const eyeColor = this.eyeColorsModule.getRandomEyeColor();
    const hairStyle = this.hairStylesModule.getRandomHairStyle();
    const occupation = this.occupationsModule.getRandomOccupation();
    const personalityTraits = this.personalityTraitsModule.pickRandomTrait(5);
    const socialClass = this.socialClassesModule.getRandomSocialClass();
    const bodyType = this.bodyTypesModule.getRandomBodyType(sex);
    const ethnicity = this.ethnicitiesModule.getRandomEthnicity();
    const birthplace =
      this.ethnicitiesModule.getRandomBirthplaceFromEthnicity(ethnicity);
    const sexuality = this.sexualitiesModule.getSexuality(age, sex);
    const hobbies = this.hobbiesModule.getRandomHobbies(1, 3);
    const alignment = this.alignmentsModule.getRandomAlignment();
    const phobia = this.phobiasModule.getRandomPhobia();
    const politicalView = this.politicsModule.getRandomPolitic();
    const clothings = this.clothingsModule.getRandomClothing(sex);

    let character: Character = {
      seed: this.seed,
      name,
      nickname,
      surname,
      sex,
      pronouns,
      age,
      hairColor,
      eyeColor,
      hairStyle,
      bodyType,
      clothings,
      ethnicity,
      birthplace,
      sexuality,
      occupation,
      phobia,
      personalityTraits,
      socialClass,
      politicalView,
      hobbies,
      alignment,
      summary: "",
    };

    const summary = this.summariesModule.getSummary(character);
    character["summary"] = summary;

    return character;
  }
}
