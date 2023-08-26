export interface Age {}

export class AgesModule {
  interfaceName = 'Age'

  public getRandomAge(min: number, max: number): Age {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
