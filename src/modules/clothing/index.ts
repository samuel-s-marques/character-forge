import { processFile } from "../../utils/utils";
import { Sex } from "../sexes";

export interface Clothing {
  headwear: string | undefined;
  outerwear: string | undefined;
  upperbody: string;
  lowerbody: string;
  footwear: string;
  accessories: string[];
}

export class ClothingsModule {
  private loadClothingData(): any {
    return processFile("clothings")["data"];
  }

  public getRandomUpperbody(sex: Sex): string {
    const upperbodies = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex.toString()]
    )[sex.toString()]["upperbody"];

    const randomIndex = Math.floor(Math.random() * upperbodies.length);
    return upperbodies[randomIndex];
  }

  public getRandomLowerbody(sex: Sex): string {
    const lowerbodies = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex.toString()]
    )[sex.toString()]["lowerbody"];

    const randomIndex = Math.floor(Math.random() * lowerbodies.length);
    return lowerbodies[randomIndex];
  }

  public getRandomHeadwear(sex: Sex, chance: number = 0.3): string | undefined {
    if (Math.random() > chance) {
        return undefined
    }

    const headwear = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex.toString()]
    )[sex.toString()]["headwear"];

    const randomIndex = Math.floor(Math.random() * headwear.length);
    return headwear[randomIndex];
  }

  public getRandomAccessories(
    sex: Sex,
    min: number = 1,
    max: number = 3,
    chance = 0.2
  ): string[] {
    const accessories = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex.toString()]
    )[sex.toString()]["accessories"];
    const selectedAccessories: string[] = [];
    const numItemsToPick = Math.floor(Math.random() * (max - min + 1)) + min;

    if (Math.random() < chance) {
      for (let index = 0; index <= numItemsToPick; index++) {
        const randomIndex = Math.floor(Math.random() * accessories.length);

        if (!selectedAccessories.includes(accessories[randomIndex])) {
          selectedAccessories.push(accessories[randomIndex]);
        }
      }
    }

    return selectedAccessories;
  }

  public getRandomFootwear(sex: Sex): string {
    const footwear = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex.toString()]
    )[sex.toString()]["footwear"];

    const randomIndex = Math.floor(Math.random() * footwear.length);
    return footwear[randomIndex];
  }

  public getRandomOuterwear(sex: Sex, chance: number): string | undefined {
    if (Math.random() > chance) {
        return undefined
    }

    const outerwear = this.loadClothingData().find(
      (entry: { [x: string]: any }) => entry[sex.toString()]
    )[sex.toString()]["outerwear"];

    const randomIndex = Math.floor(Math.random() * outerwear.length);
    return outerwear[randomIndex];
  }

  public getRandomClothing(sex: Sex): Clothing {
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
