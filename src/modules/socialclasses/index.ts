import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class SocialClassesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("socialclasses")["data"];
  }

  public getRandomSocialClass(): string {
    const rng = new splitmix32(this.seed);
    const socialclasses = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * socialclasses.length);

    return socialclasses[randomIndex];
  }
}
