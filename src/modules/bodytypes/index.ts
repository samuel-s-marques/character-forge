import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export interface BodyType {
  type: string;
  height: number;
  weight: number;
}

export class BodyTypesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadBodyTypeData(): any {
    return processFile("bodytypes")["data"];
  }

  public getRandomBodyType(sex: string): BodyType {
    const rng = new splitmix32(this.seed);

    const bodyTypes = this.loadBodyTypeData();
    const keys = Object.keys(bodyTypes[sex]);

    const randomIndex = Math.floor(rng.random() * keys.length);
    const type = keys[randomIndex];

    const { heightRange, weightRange } = bodyTypes[sex][keys[randomIndex]];

    const height =
      rng.random() * (heightRange[1] - heightRange[0]) + heightRange[0];
    const weight =
      rng.random() * (weightRange[1] - weightRange[0]) + weightRange[0];

    return {
      type,
      height,
      weight,
    };
  }
}
