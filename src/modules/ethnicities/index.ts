import { processFile } from "../../utils/utils";

export interface Ethnicity {}

export class EthnicitiesModule {
  private loadEthnicityData(): any {
    return processFile("ethnicities")["data"];
  }

  public getRandomEthnicity(): Ethnicity {
    const ethnicities = this.loadEthnicityData();
    const randomIndex = Math.floor(Math.random() * ethnicities.length);

    return ethnicities[randomIndex];
  }
}
