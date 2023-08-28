import { processFile } from "../../utils/utils";

export class SocialClassesModule {
  private loadNamesData(): any {
    return processFile("socialclasses")["data"];
  }

  public getRandomSocialClass(): string {
    const socialclasses = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * socialclasses.length);

    return socialclasses[randomIndex];
  }
}
