import { processFile } from "../../utils/utils";

export class MaritalStatusesModule {
  private loadMaritalStatusData(): any {
    return processFile("maritalstatuses")["data"];
  }

  public getRandomMaritalStatus(): string {
    const maritalstatuses = this.loadMaritalStatusData();
    const randomIndex = Math.floor(Math.random() * maritalstatuses.length);

    return maritalstatuses[randomIndex];
  }
}
