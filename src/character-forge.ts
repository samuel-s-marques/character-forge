import * as mod from "./index";

export interface Character {}

export class CharacterForge {
  private namesModule = new mod.NamesModule();
  private surnamesModule = new mod.SurnamesModule();
  private sexesModule = new mod.SexesModule();
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
    const sexuality = this.sexualitiesModule.getRandomSexuality();
    const hobbies = this.hobbiesModule.getRandomHobbies();
    const alignment = this.alignmentsModule.getRandomAlignment();
    const maritalStatus = this.maritalStatusesModule.getRandomMaritalStatus();

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
      sexuality,
      maritalStatus,
      occupation,
      personalityTraits,
      socialClass,
      hobbies,
      alignment,
    };

    return character;
  }
}
