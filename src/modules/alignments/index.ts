import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class AlignmentsModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadAlignmentData(): any {
    return processFile("alignments")["data"];
  }

  public getRandomAlignment(): string {
    const rng = new splitmix32(this.seed);
    const alignments = this.loadAlignmentData();
    const randomIndex = Math.floor(rng.random() * alignments.length);

    return alignments[randomIndex];
  }
}
