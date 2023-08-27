import { processFile } from "../../utils/utils";

export interface Phobia {}

export class PhobiasModule {
  private loadPhobiaData(): any {
    return processFile("phobias")["data"];
  }

  public getRandomPhobia(): Phobia {
    const phobias = this.loadPhobiaData();
    const randomIndex = Math.floor(Math.random() * phobias.length);

    return phobias[randomIndex];
  }
}
