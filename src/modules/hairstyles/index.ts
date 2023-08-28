import { processFile } from "../../utils/utils";

export class HairStylesModule {
  private loadNamesData(): any {
    return processFile("hairstyles")["data"];
  }

  public getRandomHairStyle(): string {
    const hairStyles = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * hairStyles.length);

    return hairStyles[randomIndex];
  }
}
