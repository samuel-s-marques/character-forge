import { Mulberry32 } from "../../utils/mulberry32";
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
    const rng = new Mulberry32(this.seed);
    const socialclasses = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * socialclasses.length);

    return socialclasses[randomIndex];
  }
}
