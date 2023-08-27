import { processFile } from "../../utils/utils";

export interface MaritalStatus {}

export class MaritalStatusesModule {
  private loadMaritalStatusData(): any {
    return processFile("maritalstatuses")["data"];
  }

  public getRandomMaritalStatus(): MaritalStatus {
    const maritalstatuses = this.loadMaritalStatusData();
    const randomIndex = Math.floor(Math.random() * maritalstatuses.length);

    return maritalstatuses[randomIndex];
  }
}
