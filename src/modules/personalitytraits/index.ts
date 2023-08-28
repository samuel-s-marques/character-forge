import { processFile } from "../../utils/utils";

export interface PersonalityTrait {
  name: string;
  type: string;
  contradictions: string[];
}

export class PersonalityTraitModule {
  private loadPersonalityTraitData(): any {
    return processFile("personalitytraits")["data"];
  }

  public pickRandomTrait(count: number = 3): PersonalityTrait[] {
    const personalityTraitData = this.loadPersonalityTraitData();
    const selectedTraits: PersonalityTrait[] = [];

    for (let index = 0; index < count; index++) {
      const randomIndex = Math.floor(
        Math.random() * personalityTraitData.length
      );
      const newTrait = personalityTraitData[randomIndex];

      if (this.isTraitValid(newTrait, selectedTraits)) {
        if (!selectedTraits.includes(newTrait.name)) {
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
