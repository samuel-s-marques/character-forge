import { processFile } from "../../utils/utils";

export class PronounsModule {
  private loadPronounData(): any {
    return processFile("pronouns")["data"];
  }

  public getPronoun(sex: string): string {
    const pronouns = this.loadPronounData().find(
      (entry: { [x: string]: any }) => entry[sex]
    );

    return pronouns[sex];
  }
}
