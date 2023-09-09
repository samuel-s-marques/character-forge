import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export interface Name {
  name: string;
  nickname: string;
}

export class NamesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("names")["data"];
  }

  public getRandomName(sex: string): Name {
    const rng = new splitmix32(this.seed);
    const names = this.loadNamesData().find(
      (entry: { [x: string]: any }) => entry[sex]
    );

    const randomIndex = Math.floor(
      rng.random() * names[sex].length
    );
    const { name, nicknames } = names[sex][randomIndex];

    const randomNicknameIndex = Math.floor(rng.random() * nicknames.length);
    const nickname = nicknames[randomNicknameIndex];

    return { name, nickname };
  }
}
