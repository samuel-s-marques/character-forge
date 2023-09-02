export class Mulberry32 {
  private seed: number;

  constructor(seed?: number) {
    if (seed !== undefined) {
      this.seed = seed;
    } else {
      const currentTime = Date.now();
      const otherEntropy = Math.floor(Math.random() * 1000);

      this.seed = currentTime + otherEntropy;
    }
  }

  public random(): number {
    var t = (this.seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}
