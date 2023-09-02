import { Mulberry32 } from "../../utils/mulberry32";
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
    const rng = new Mulberry32(this.seed);
    const alignments = this.loadAlignmentData();
    const randomIndex = Math.floor(rng.random() * alignments.length);

    return alignments[randomIndex];
  }
}
