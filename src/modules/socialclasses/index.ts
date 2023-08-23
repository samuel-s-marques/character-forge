import { processFile } from "../../utils/utils";

export interface SocialClass {}

export class SocialClassesModule {
  private loadNamesData(): any {
    return processFile("socialclasses")["data"];
  }

  public getRandomSocialClass(): SocialClass {
    const socialclasses = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * socialclasses.length);

    return socialclasses[randomIndex];
  }
}
