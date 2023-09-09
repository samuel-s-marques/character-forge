import { Character } from "../../character-forge";
import { splitmix32 } from "../../utils/splitmix32";
import { PersonalityTrait } from "../personalitytraits";

export class SummariesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  public getIntroduction(character: Character): string {
    let introduction: string = "";

    const rng = new splitmix32(this.seed);
    const name: string = character.name;
    let nickname: string = " ";
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
      nickname = ` "${character.nickname}" `;
    }

    const introductions: string[] = [
      `A ${age}-year-old ${occupation}, ${name}${nickname}${surname} thrives through ${hobbies}.`,
      `${name}${nickname}${surname}, ${age}, is a ${occupation} with a penchant for ${hobbies}.`,
      `${name}${nickname}${surname}, a ${age}-year-old ${occupation}, finds fulfillment in ${hobbies}.`,
      `Meet ${name}${nickname}${surname}, a ${age}-year-old ${occupation} who finds solace in ${hobbies}.`,
    ];

    const randomIndex = Math.floor(rng.random() * introductions.length);

    introduction = introductions[randomIndex];

    if (positiveTraits.length > 0) {
      const formattedPositiveTraits = positiveTraits.formattedJoin();

      const positiveTraitIntroductions = [
        `${pronouns.subjectPronoun.capitalize()} radiates ${formattedPositiveTraits} traits.`,
        `${pronouns.possessiveAdjective.capitalize()} ${formattedPositiveTraits} traits makes ${
          pronouns.objectPronoun
        } a social gem.`,
        `${pronouns.possessiveAdjective.capitalize()} ${formattedPositiveTraits} traits makes ${
          pronouns.objectPronoun
        } a magnet for camaraderie.`,
        `${pronouns.subjectPronoun.capitalize()} exudes ${formattedPositiveTraits} traits.`,
      ];

      const randomIndex = Math.floor(
        rng.random() * positiveTraitIntroductions.length
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
        `Although occasional ${formattedNegativeTraits} traits tendencies arise.`,
      ];

      const randomIndex = Math.floor(
        rng.random() * negativeTraitIntroductions.length
      );

      negativeTraitIntroduction = negativeTraitIntroductions[randomIndex];
    }

    return [
      introduction,
      positiveTraitIntroduction,
      negativeTraitIntroduction,
    ].join(" ");
  }

  public getPhysicalDescription(character: Character): string {
    const rng = new splitmix32(this.seed);
    const name: string = character.name;
    const hairStyle: string = character.hairStyle;
    const hairColor: string = character.hairColor;
    const eyeColor: string = character.eyeColor;
    const type: string = character.bodyType.type;
    const height: string = character.bodyType.height.toFixed(2);
    const weight: string = character.bodyType.weight.toFixed(2);
    const pronouns = character.pronouns;

    const physicalDescriptions = [
      `Physically, ${name} is ${type} and stands at ${height}m with ${weight} kg. ${pronouns.subjectPronoun.capitalize()} has ${hairColor} ${hairStyle} hair and ${eyeColor} eyes.`,
      `In terms of appearance, ${name} boasts a ${type} frame with ${weight} kg, and stands at ${height}m. ${pronouns.possessiveAdjective.capitalize()} ${hairColor} ${hairStyle} hair is usually neatly combed, complementing ${
        pronouns.possessiveAdjective
      } ${eyeColor} eyes.`,
    ];

    const randomIndex = Math.floor(rng.random() * physicalDescriptions.length);

    let physicalDescription: string = physicalDescriptions[randomIndex];

    return physicalDescription;
  }

  public getBackstory(character: Character): string {
    let backstory: string = "";

    const rng = new splitmix32(this.seed);
    const ethnicity = character.ethnicity;
    const birthplace = character.birthplace;
    const pronouns = character.pronouns;
    const sexuality = character.sexuality.sexuality;

    const randomTraitIndex = Math.floor(
      rng.random() * character.personalityTraits.length
    );
    const randomTrait: string =
      character.personalityTraits[randomTraitIndex].name;

    const backstories: string[] = [
      `${pronouns.subjectPronoun.capitalize()} is ${ethnicity.capitalize()}, born in ${birthplace}, and defines ${
        pronouns.objectPronoun
      }self as ${sexuality}.`,
      `Born in ${birthplace}, ${character.name} embraces ${
        pronouns.possessiveAdjective
      } ${ethnicity.capitalize()} heritage.`,
      `Originating from ${birthplace}, ${character.name} treasures ${
        pronouns.possessiveAdjective
      } ${ethnicity.capitalize()} heritage.`,
      `Hailing from ${birthplace}, ${character.name} takes pride in ${
        pronouns.possessiveAdjective
      } ${ethnicity.capitalize()} heritage.`,
    ];

    const randomIndex = Math.floor(rng.random() * backstories.length);
    backstory = backstories[randomIndex];

    const occupations: string[] = [
      `${pronouns.subjectPronoun.capitalize()} excels in ${
        pronouns.possessiveAdjective
      } field of work as ${character.occupation}, drawing from ${
        pronouns.possessiveAdjective
      } ${randomTrait} nature.`,
      `${pronouns.possessiveAdjective.capitalize()} role as ${
        character.occupation
      } highlights ${
        pronouns.possessiveAdjective
      } ${randomTrait} approach to life.`,
      `${pronouns.possessiveAdjective.capitalize()} journey as ${
        character.occupation
      } is colored by ${pronouns.possessiveAdjective} experiences.`,
      `${pronouns.possessiveAdjective.capitalize()} role as ${
        character.occupation
      } sheds light on ${pronouns.possessiveAdjective} perspectives.`,
    ];

    const randomOccupationIndex = Math.floor(rng.random() * occupations.length);
    backstory += ` ${occupations[randomOccupationIndex]}`;

    if (character.phobia !== undefined) {
      const phobias = [
        `${pronouns.subjectPronoun.capitalize()} harbors an irrational fear of ${
          character.phobia
        }.`,
        `${pronouns.subjectPronoun.capitalize()} has a severe phobia of ${
          character.phobia
        }.`,
        `However, ${pronouns.objectPronoun} deep-seated phobia of ${character.phobia} often surfaces in unexpected situations.`,
        `Although, ${pronouns.objectPronoun} phobia of ${character.phobia} remains a hidden vulnerability.`,
      ];

      const randomIndex = Math.floor(rng.random() * phobias.length);
      const phobia = phobias[randomIndex];

      backstory += ` ${phobia}`;
    }

    return backstory;
  }

  public getSummary(character: Character): string {
    return [
      this.getIntroduction(character),
      this.getBackstory(character),
      this.getPhysicalDescription(character),
    ].join("\n\n");
  }
}
