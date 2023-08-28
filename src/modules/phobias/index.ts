import { processFile } from "../../utils/utils";

export class PhobiasModule {
  private loadPhobiaData(): any {
    return processFile("phobias")["data"];
  }

  public getRandomPhobia(chance: number = 0.2): string | undefined {
    if (Math.random() > chance) {
      return undefined;
    }

    const phobias = this.loadPhobiaData();
    const randomIndex = Math.floor(Math.random() * phobias.length);

    return phobias[randomIndex];
  }
}
