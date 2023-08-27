export interface Age {}

export class AgesModule {
  public getRandomAge(min: number = 18, max: number = 50): Age {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
