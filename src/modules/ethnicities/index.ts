import { processFile } from "../../utils/utils";

export class EthnicitiesModule {
  private loadEthnicityData(): any {
    return processFile("ethnicities")["data"];
  }

  public getRandomEthnicity(): string {
    const ethnicities = this.loadEthnicityData();
    const randomIndex = Math.floor(Math.random() * ethnicities.length);

    return ethnicities[randomIndex].name;
  }

  public getRandomBirthplaceFromEthnicity(ethnicity: string): string {
    const ethnicities = this.loadEthnicityData();
    const selectedEthnicity = ethnicities.find(
      (e: { name: string }) => e.name === ethnicity
    );

    const birthplaces = selectedEthnicity.birthplaces;
    const randomBirthplaceIndex = Math.floor(
      Math.random() * birthplaces.length
    );

    return birthplaces[randomBirthplaceIndex];
  }
}
