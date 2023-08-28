import { Character } from "../../character-forge";
import { processFile } from "../../utils/utils";
import { PersonalityTrait } from "../personalitytraits";

export class SummariesModule {
  public getIntroduction(character: Character): string {
    let introduction: string = "";

    const name: string = character.name;
    let nickname: string = "";
    const surname: string = character.surname;
    const age: number = character.age;
    const hobbies: string = character.hobbies.formattedJoin();
    const occupation: string = character.occupation;
    const personalityTraits: PersonalityTrait[] = character.personalityTraits;
    const pronouns = character.pronouns;

    const positiveTraits: string[] = [];
    const negativeTraits: string[] = [];

    let positiveTraitIntroduction: string = "";
    let negativeTraitIntroduction: string = "";

    for (const trait of personalityTraits) {
      if (trait.type === "positive") {
        positiveTraits.push(trait.name);
      } else {
        negativeTraits.push(trait.name);
      }
    }

    if (character.nickname !== undefined) {
      nickname = `"${character.nickname}"`;
    }

    const introductions: string[] = [
      `A ${age}-year-old ${occupation}, ${name} ${nickname} ${surname} thrives through ${hobbies}.`,
      `${name} ${nickname} ${surname}, ${age}, is a ${occupation} with a perchant for ${hobbies}.`,
      `${name} ${nickname} ${surname}, a ${age}-year-old ${occupation}, finds fulfillment in ${hobbies}.`,
      `Meet ${name} ${nickname} ${surname}, a ${age}-year-old ${occupation} who finds solace in ${hobbies}.`
    ];

    const randomIndex = Math.floor(Math.random() * introductions.length);

    introduction = introductions[randomIndex];

    if (positiveTraits.length > 0) {
      const formattedPositiveTraits = positiveTraits.formattedJoin();

      const positiveTraitIntroductions = [
        `${pronouns.subjectPronoun.capitalize()} radiates ${formattedPositiveTraits} traits.`,
        `${pronouns.possessiveAdjective.capitalize()} ${formattedPositiveTraits} makes ${pronouns.objectPronoun} traits a social gem.`,
        `${pronouns.possessiveAdjective.capitalize()} ${formattedPositiveTraits} makes ${pronouns.objectPronoun} traits a magnet for camaraderie.`,
        `${pronouns.subjectPronoun.capitalize()} exudes ${formattedPositiveTraits} traits.`
      ];

      const randomIndex = Math.floor(
        Math.random() * positiveTraitIntroductions.length
      );

      positiveTraitIntroduction = positiveTraitIntroductions[randomIndex];
    }

    if (negativeTraits.length > 0) {
      const formattedNegativeTraits = negativeTraits.formattedJoin();

      const negativeTraitIntroductions = [
        `Although traces of ${formattedNegativeTraits} traits occasionally surface.`,
        `But occasional bouts of ${formattedNegativeTraits} traits can emerge.`,
        `A touch of ${formattedNegativeTraits} traits surfaces now and then.`,
        `But occasionally peppered with hints of ${formattedNegativeTraits} traits`,
        `Although occasional ${formattedNegativeTraits} traits tendencies arise.`
      ];

      const randomIndex = Math.floor(
        Math.random() * negativeTraitIntroductions.length
      );

      negativeTraitIntroduction = negativeTraitIntroductions[randomIndex];
    }

    return [
      introduction,
      positiveTraitIntroduction,
      negativeTraitIntroduction,
    ].join(" ");
  }

  public getSummary(character: Character): string {
    return this.getIntroduction(character);
  }
}
