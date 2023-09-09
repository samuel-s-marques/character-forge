export class splitmix32 {
  public seed: number;

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
    this.seed |= 0;
    this.seed = (this.seed + 0x9e3779b9) | 0;
    var t = this.seed ^ (this.seed >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);

    return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
  }
}
