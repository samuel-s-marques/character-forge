import path = require("path");
import { processFile } from "../../utils/utils";

export interface Name {}

export class NamesModule {
  private loadNamesData(): any {
    return processFile("names")["data"];
  }

  public getRandomName(sex: string): Name {
    const names = this.loadNamesData().find((entry: { [x: string]: any }) => entry[sex]);
    const randomIndex = Math.floor(Math.random() * names[sex].length)

    return names[sex][randomIndex];
  }
}
