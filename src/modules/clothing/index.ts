import { splitmix32 } from "../../utils/splitmix32";
import { generateRandomNumber, processFile } from "../../utils/utils";

export interface Clothing {
  headwear: string | undefined;
  outerwear: string | undefined;
  upperbody: string;
  lowerbody: string;
  footwear: string;
  accessories: string[];
}

export class ClothingsModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadClothingData(): any {
    return processFile("clothings")["data"];
  }

  public getRandomUpperbody(sex: string): string {
    const rng = new splitmix32(this.seed);
    const upperbodies = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex]
    )[sex]["upperbody"];

    const randomIndex = Math.floor(rng.random() * upperbodies.length);
    return upperbodies[randomIndex];
  }

  public getRandomLowerbody(sex: string): string {
    const rng = new splitmix32(this.seed);
    const lowerbodies = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex]
    )[sex]["lowerbody"];

    const randomIndex = Math.floor(rng.random() * lowerbodies.length);
    return lowerbodies[randomIndex];
  }

  public getRandomHeadwear(
    sex: string,
    chance: number = 0.3
  ): string | undefined {
    const rng = new splitmix32(this.seed);

    if (rng.random() > chance) {
      return undefined;
    }

    const headwear = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex]
    )[sex]["headwear"];

    const randomIndex = Math.floor(rng.random() * headwear.length);
    return headwear[randomIndex];
  }

  public getRandomAccessories(
    sex: string,
    min: number = 1,
    max: number = 3,
    chance = 0.2
  ): string[] {
    const rng = new splitmix32(this.seed);
    const accessories = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex]
    )[sex]["accessories"];
    const selectedAccessories: string[] = [];
    const numItemsToPick = generateRandomNumber(min, max, this.seed);

    if (rng.random() < chance) {
      for (let index = 0; index <= numItemsToPick; index++) {
        const randomIndex = Math.floor(rng.random() * accessories.length);

        if (!selectedAccessories.includes(accessories[randomIndex])) {
          selectedAccessories.push(accessories[randomIndex]);
        }
      }
    }

    return selectedAccessories;
  }

  public getRandomFootwear(sex: string): string {
    const rng = new splitmix32(this.seed);
    const footwear = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex]
    )[sex]["footwear"];

    const randomIndex = Math.floor(rng.random() * footwear.length);
    return footwear[randomIndex];
  }

  public getRandomOuterwear(sex: string, chance: number): string | undefined {
    const rng = new splitmix32(this.seed);

    if (rng.random() > chance) {
      return undefined;
    }

    const outerwear = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex]
    )[sex]["outerwear"];

    const randomIndex = Math.floor(rng.random() * outerwear.length);
    return outerwear[randomIndex];
  }

  public getRandomClothing(sex: string): Clothing {
    const headwear = this.getRandomHeadwear(sex);
    const accessories = this.getRandomAccessories(sex, 1, 2, 0.3);
    const outerwear = this.getRandomOuterwear(sex, 0.3);
    const upperbody = this.getRandomUpperbody(sex);
    const lowerbody = this.getRandomLowerbody(sex);
    const footwear = this.getRandomFootwear(sex);

    return {
      headwear,
      outerwear,
      upperbody,
      lowerbody,
      footwear,
      accessories,
    };
  }
}
