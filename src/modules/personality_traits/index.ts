import { processFile } from "../../utils/utils";

export interface PersonalityTrait {
  name: string;
  contradictions: string[];
}

export class PersonalityTraitsModule {
  interfaceName = "PersonalityTrait";

  private loadPersonalityTraitData(): any {
    return processFile("personality_traits")["data"];
  }

  public pickRandomTrait(count: number): PersonalityTrait[] {
    const personalityTraitData = this.loadPersonalityTraitData();
    const selectedTraits: PersonalityTrait[] = [];

    for (let index = 0; index < count; index++) {
      const randomIndex = Math.floor(
        Math.random() * personalityTraitData.length
      );
      const newTrait = personalityTraitData[randomIndex];

      if (this.isTraitValid(newTrait, selectedTraits)) {
        if (!selectedTraits.includes(newTrait.name)) {
          selectedTraits.push(newTrait.name);
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
