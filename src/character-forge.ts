import * as mod from "./index";

export interface Character {
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
  sexuality: string;
  maritalStatus: string;
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
  private namesModule = new mod.NamesModule();
  private surnamesModule = new mod.SurnamesModule();
  private sexesModule = new mod.SexesModule();
  private pronounsModule = new mod.PronounsModule();
  private agesModule = new mod.AgesModule();
  private hairColorsModule = new mod.HairColorsModule();
  private eyeColorsModule = new mod.EyeColorsModule();
  private hairStylesModule = new mod.HairStylesModule();
  private occupationsModule = new mod.OccupationsModule();
  private personalityTraitsModule = new mod.PersonalityTraitModule();
  private socialClassesModule = new mod.SocialClassesModule();
  private bodyTypesModule = new mod.BodyTypesModule();
  private ethnicitiesModule = new mod.EthnicitiesModule();
  private sexualitiesModule = new mod.SexualitiesModule();
  private hobbiesModule = new mod.HobbiesModule();
  private alignmentsModule = new mod.AlignmentsModule();
  private maritalStatusesModule = new mod.MaritalStatusesModule();
  private phobiasModule = new mod.PhobiasModule();
  private politicsModule = new mod.PoliticsModule();
  private clothingsModule = new mod.ClothingsModule();
  private summariesModule = new mod.SummariesModule();

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
    const sexuality = this.sexualitiesModule.getRandomSexuality();
    const hobbies = this.hobbiesModule.getRandomHobbies(1, 3);
    const alignment = this.alignmentsModule.getRandomAlignment();
    const maritalStatus = this.maritalStatusesModule.getRandomMaritalStatus();
    const phobia = this.phobiasModule.getRandomPhobia();
    const politicalView = this.politicsModule.getRandomPolitic();
    const clothings = this.clothingsModule.getRandomClothing(sex);

    let character: Character = {
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
      sexuality,
      maritalStatus,
      occupation,
      phobia,
      personalityTraits,
      socialClass,
      politicalView,
      hobbies,
      alignment,
      summary: ""
    };

    const summary = this.summariesModule.getSummary(character);
    character["summary"] = summary

    return character;
  }
}
