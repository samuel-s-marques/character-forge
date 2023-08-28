import { processFile } from "../../utils/utils";

export interface Name {
  name: string;
  nickname: string;
}

export class NamesModule {
  private loadNamesData(): any {
    return processFile("names")["data"];
  }

  public getRandomName(sex: string): Name {
    const names = this.loadNamesData().find(
      (entry: { [x: string]: any }) => entry[sex]
    );

    const randomIndex = Math.floor(
      Math.random() * names[sex].length
    );
    const { name, nicknames } = names[sex][randomIndex];

    const randomNicknameIndex = Math.floor(Math.random() * nicknames.length);
    const nickname = nicknames[randomNicknameIndex];

    return { name, nickname };
  }
}
