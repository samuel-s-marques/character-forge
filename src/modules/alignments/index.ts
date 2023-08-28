import { processFile } from "../../utils/utils";

export class AlignmentsModule {
  private loadAlignmentData(): any {
    return processFile("alignments")["data"];
  }

  public getRandomAlignment(): string {
    const alignments = this.loadAlignmentData();
    const randomIndex = Math.floor(Math.random() * alignments.length);

    return alignments[randomIndex];
  }
}
