import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export interface PersonalityTrait {
  name: string;
  type: string;
  contradictions: string[];
}

export class PersonalityTraitModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadPersonalityTraitData(): any {
    return processFile("personalitytraits")["data"];
  }

  public pickRandomTrait(count: number = 3): PersonalityTrait[] {
    const rng = new splitmix32(this.seed);
    const personalityTraitData = this.loadPersonalityTraitData();
    const selectedTraits: PersonalityTrait[] = [];

    while (selectedTraits.length != count) {
      const randomIndex = Math.floor(
        rng.random() * personalityTraitData.length
      );
      const newTrait = personalityTraitData[randomIndex];

      if (this.isTraitValid(newTrait, selectedTraits)) {
        if (!selectedTraits.includes(newTrait)) {
          selectedTraits.push(newTrait);
        }
      }
    }

    return selectedTraits;
  }

  public isTraitValid(
    newTrait: PersonalityTrait,
    selectedTraits: PersonalityTrait[]
  ): boolean {
    for (const selectedTrait of selectedTraits) {
      if (newTrait.contradictions.includes(selectedTrait.name)) {
        return false;
      }
    }

    return true;
  }
}
