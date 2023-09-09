import { splitmix32 } from "../../utils/splitmix32";
import {
  generateRandomNumber,
  processFile,
  weightedRandom,
} from "../../utils/utils";
import { AgesModule } from "../age";
import { NamesModule } from "../names";
import { SexesModule } from "../sexes";
import { SurnamesModule } from "../surnames";

export interface Sexuality {
  sexuality: string;
  relationshipStatus: string;
  pastPartners: number;
  seriousRelationship: number;
  relationshipHistory: Array<Relationship>;
}

interface Character {
  name: string;
  surname: string;
  age: number;
}

export interface Relationship {
  partner: Character;
  nature: string;
  duration: string;
}

export class SexualitiesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadSexualityData(): any {
    return processFile("sexualities")["data"];
  }

  public getSexuality(age: number, sex: string): Sexuality {
    const sexuality: string = this.getRandomSexuality();
    const relationshipStatus: string = this.getRandomRelationshipStatus();
    const pastPartners: number = this.getPastPartners(age);
    const seriousRelationship: number = this.generateSeriousRelationships(age);
    const relationshipHistory: Array<Relationship> = this.generateRelationshipHistory(pastPartners, sexuality, sex); 

    return {
      sexuality,
      relationshipStatus,
      pastPartners,
      seriousRelationship,
      relationshipHistory,
    };
  }

  public getRandomSexuality(): string {
    const rng = new splitmix32(this.seed);
    const sexualities = this.loadSexualityData()["sexualities"];
    const randomIndex = Math.floor(rng.random() * sexualities.length);

    return sexualities[randomIndex];
  }

  public getRandomRelationshipStatus(): string {
    const relationshipStatus = this.loadSexualityData()["relationshipStatus"];

    return weightedRandom(relationshipStatus, [30, 20, 10, 5, 2], this.seed);
  }

  public getPastPartners(age: number): number {
    const maxPartners = Math.floor(age / 5);

    return Math.min(generateRandomNumber(0, maxPartners + 1, this.seed), maxPartners);
  }

  public generateSeriousRelationships(age: number): number {
    const maxRelationships = Math.floor(age / 8);
    return Math.min(
      generateRandomNumber(0, maxRelationships + 1, this.seed),
      maxRelationships
    );
  }

  public generateRelationshipHistory(
    pastPartners: number,
    sexuality: string,
    sex: string,
  ): Array<Relationship> {
    const history: Array<Relationship> = [];
    const data = this.loadSexualityData();
    const natures = data["nature"];
    const durations = data["duration"];

    for (let index = 0; index < pastPartners; index++) {
      const partner: Character = this.generateCharacter(sex, sexuality);
      const nature = weightedRandom(natures, [70, 30]);
      const duration = weightedRandom(durations, [40, 60]);

      history.push({ partner, nature, duration });
    }

    return history;
  }

  private generateCharacter(sex: string, sexuality: string): Character {
    const namesModule = new NamesModule();
    const surnamesModule = new SurnamesModule();
    const agesModule = new AgesModule();
    const sexesModule = new SexesModule();
    let characterSex: string = ""

    switch (sexuality) {
      case "straight":
        characterSex = sex === "male" ? "female" : "male"
        break;
      case "bissexual":
        characterSex = sexesModule.getRandomSex()
        break;
      case "gay":
        characterSex = sex
        break;
      default:
        characterSex = sexesModule.getRandomSex()
        break;
    }

    const name = namesModule.getRandomName(characterSex).name;
    const surname = surnamesModule.getRandomSurname();
    const age = agesModule.getRandomAge(18, 50);

    return {
      name,
      surname,
      age,
    };
  }
}
