import { Mulberry32 } from "../../utils/mulberry32";
import { processFile } from "../../utils/utils";

export class EthnicitiesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadEthnicityData(): any {
    return processFile("ethnicities")["data"];
  }

  public getRandomEthnicity(): string {
    const rng = new Mulberry32(this.seed);
    const ethnicities = this.loadEthnicityData();
    const randomIndex = Math.floor(rng.random() * ethnicities.length);

    return ethnicities[randomIndex].name;
  }

  public getRandomBirthplaceFromEthnicity(ethnicity: string): string {
    const rng = new Mulberry32(this.seed);
    const ethnicities = this.loadEthnicityData();
    const selectedEthnicity = ethnicities.find(
      (e: { name: string }) => e.name === ethnicity
    );

    const birthplaces = selectedEthnicity.birthplaces;
    const randomBirthplaceIndex = Math.floor(
      rng.random() * birthplaces.length
    );

    return birthplaces[randomBirthplaceIndex];
  }
}
