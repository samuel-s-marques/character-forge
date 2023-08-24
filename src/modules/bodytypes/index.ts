import { processFile } from "../../utils/utils";

export interface BodyType {}

export class BodyTypesModule {
  private loadBodyTypeData(): any {
    return processFile("bodytypes")["data"];
  }

  public getRandomBodyType(): BodyType {
    const bodyTypes = this.loadBodyTypeData();
    const randomIndex = Math.floor(Math.random() * bodyTypes.length);

    return bodyTypes[randomIndex];
  }
}
