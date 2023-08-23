import { processFile } from "../../utils/utils";

export interface HairStyle {}

export class HairStylesModule {
  private loadNamesData(): any {
    return processFile("hairstyles")["data"];
  }

  public getRandomHairStyle(): HairStyle {
    const hairStyles = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * hairStyles.length);

    return hairStyles[randomIndex];
  }
}
