import { splitmix32 } from "../../utils/splitmix32";
import { processFile, weightedRandom } from "../../utils/utils";

export class EthnicitiesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadEthnicityData(): any {
    return processFile("ethnicities")["data"];
  }

  public getRandomEthnicity(): string {
    const rng = new splitmix32(this.seed);
    const ethnicities = this.loadEthnicityData();
    const randomIndex = Math.floor(rng.random() * ethnicities.length);

    return ethnicities[randomIndex].name;
  }

  public getRandomBirthplaceFromEthnicity(ethnicity: string): string {
    const rng = new splitmix32(this.seed);
    const ethnicities = this.loadEthnicityData();
    const selectedEthnicity = ethnicities.find(
      (e: { name: string }) => e.name === ethnicity
    );

    const birthplaces = selectedEthnicity.birthplaces;
    const randomBirthplaceIndex = Math.floor(rng.random() * birthplaces.length);

    return birthplaces[randomBirthplaceIndex];
  }

  public getRandomSkinToneFromEthnicity(ethnicity: string): string {
    const rng = new splitmix32(this.seed);
    const ethnicities = this.loadEthnicityData();
    const selectedEthnicity = ethnicities.find(
      (e: { name: string }) => e.name === ethnicity
    );

    const skinTones = selectedEthnicity.skin_tones;
    if (skinTones && skinTones.length > 0) {
      const totalWeight = skinTones.reduce(
        (sum: any, tone: { weight: any }) => sum + tone.weight,
        0
      );
      let randomWeightedIndex = rng.random() * totalWeight;

      for (const tone of skinTones) {
        randomWeightedIndex -= tone.weight;
        if (randomWeightedIndex < 0) {
          return tone.tone;
        }
      }
    }

    return "";
  }

  public getRandomReligionFromEthnicity(ethnicity: string): string {
    const rng = new splitmix32(this.seed);
    const ethnicities = this.loadEthnicityData();
    const selectedEthnicity = ethnicities.find(
      (e: { name: string }) => e.name === ethnicity
    );

    const religions = selectedEthnicity.religions;
    const totalWeight = religions.reduce(
      (sum: any, religion: { weight: any }) => sum + religion.weight,
      0
    );

    const random = rng.random() * totalWeight;

    let selectedReligion = null;
    let cumulativeWeight = 0;

    for (const religion of religions) {
      cumulativeWeight += religion.weight;
      if (random <= cumulativeWeight) {
        selectedReligion = religion.religion;
        break;
      }
    }

    return selectedReligion;
  }
}
