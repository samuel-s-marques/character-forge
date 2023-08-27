import { processFile } from "../../utils/utils";

export interface Phobia {}

export class PhobiasModule {
  private loadPhobiaData(): any {
    return processFile("phobias")["data"];
  }

  public getRandomPhobia(chance: number = 0.2): Phobia {
    if (Math.random() > chance) {
      return undefined as unknown as Phobia;
    }

    const phobias = this.loadPhobiaData();
    const randomIndex = Math.floor(Math.random() * phobias.length);

    return phobias[randomIndex];
  }
}
