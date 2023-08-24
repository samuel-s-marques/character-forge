import { processFile } from "../../utils/utils";
import { Sex } from "../sexes";

export interface BodyType {
  type: string;
  height: number;
  weight: number;
}

export class BodyTypesModule {
  private loadBodyTypeData(): any {
    return processFile("bodytypes")["data"];
  }

  public getRandomBodyType(sex: Sex): BodyType {
    const bodyTypes = this.loadBodyTypeData();
    const keys = Object.keys(bodyTypes[sex.toString()]);

    const randomIndex = Math.floor(Math.random() * keys.length);
    const type = keys[randomIndex];

    const { heightRange, weightRange } =
      bodyTypes[sex.toString()][keys[randomIndex]];

    const height =
      Math.random() * (heightRange[1] - heightRange[0]) + heightRange[0];
    const weight =
      Math.random() * (weightRange[1] - weightRange[0]) + weightRange[0];

    return {
      type,
      height,
      weight,
    };
  }
}
