import { processFile } from "../../utils/utils";
import { Sex } from "../sexes";

export interface Name {}

export class NamesModule {
  private loadNamesData(): any {
    return processFile("names")["data"];
  }

  public getRandomName(sex: Sex): Name {
    const names = this.loadNamesData().find((entry: { [x: string]: any }) => entry[sex.toString()]);
    const randomIndex = Math.floor(Math.random() * names[sex.toString()].length)

    return names[sex.toString()][randomIndex];
  }
}
