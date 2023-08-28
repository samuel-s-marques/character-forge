import { processFile } from "../../utils/utils";

export interface Pronoun {
  subjectPronoun: string;
  objectPronoun: string;
  possessiveAdjective: string;
  possessivePronoun: string;
}

export class PronounsModule {
  private loadPronounData(): any {
    return processFile("pronouns")["data"];
  }

  public getPronoun(sex: string): Pronoun {
    const pronouns = this.loadPronounData().find(
      (entry: { [x: string]: any }) => entry[sex]
    );

    return pronouns[sex];
  }
}
