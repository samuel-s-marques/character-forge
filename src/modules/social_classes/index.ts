import { processFile } from "../../utils/utils";

export interface SocialClass {}

export class SocialClassesModule {
  interfaceName = "SocialClass";

  private loadNamesData(): any {
    return processFile("social_classes")["data"];
  }

  public getRandomSocialClass(): SocialClass {
    const socialclasses = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * socialclasses.length);

    return socialclasses[randomIndex];
  }
}
