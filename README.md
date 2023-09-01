# [character-forge](https://www.npmjs.com/package/character-forge)

A powerful NPM package for generating procedural characters with randomized attributes like name, surname, sex, gender, personality traits and more.

## Features

CharacterForge offers an extensive list of attributes that can be customized to create well-rounded characters:

- Names: Generates first names, nicknames, and surnames
- Physical Appearance: Generates sex, age, hair color, eye color, hair style, body type, height, and weight to create a vivid visual representation.
- Clothing: Generates the character's clothing style and attire.
- Background: Generates ethnicity, sexuality and marital status, birth place, and occupation for a comprehensive background story.
- Psychological Traits: Generates phobias, personality traits, alignment, and hobbies to give your character depth and complexity.
- Social Aspects: Generates the character's social class and political views to explore their position and beliefs in your world.

## Installation

To use character-forge in your project, you can install it using npm:

```bash
npm install character-forge
```

## Usage

1. **Import character-forge:**

   ```javascript
   const CharacterForge = require("character-forge");
   // or using ES6 modules
   // import CharacterForge from 'character-forge';
   ```

2. **Create an instance of CharacterForge:**

   ```javascript
   const forge = new CharacterForge();
   ```

3. **Generate a Character:**

   ```javascript
   const character = forge.forge();
   console.log(character);
   ```

4. **Result:**

   ```javascript
   {
      name: 'Victoria',
      nickname: 'Vic',
      surname: 'Anderson',
      sex: 'female',
      pronouns: {
         subjectPronoun: 'she',
         objectPronoun: 'her',
         possessiveAdjective: 'her',
         possessivePronoun: 'hers'
      },
      age: 44,
      hairColor: 'jet black',
      eyeColor: 'gray',
      hairStyle: 'braids',
      bodyType: {
         type: 'muscular',
         height: 1.8730917971944987,
         weight: 71.9487367973549
      },
      clothings: {
         headwear: 'hair clip',
         outerwear: undefined,
         upperbody: 'blouse',
         lowerbody: 'bermuda shorts',
         footwear: 'heels',
         accessories: []
      },
      ethnicity: 'latin american',
      birthplace: 'Brazil',
      sexuality: {
         sexuality: 'asexual',
         relationshipStatus: 'married',
         pastPartners: 8,
         seriousRelationship: 1,
         relationshipHistory: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object]
         ]
      },
      occupation: 'cop',
      phobia: undefined,
      personalityTraits: [
         { name: 'impatient', type: 'negative', contradictions: [Array] },
         {
            name: 'perfectionistic',
            type: 'negative',
            contradictions: [Array]
         },
         { name: 'spontaneous', type: 'negative', contradictions: [Array] },
         { name: 'humble', type: 'positive', contradictions: [Array] },
         { name: 'curious', type: 'positive', contradictions: [Array] }
      ],
      socialClass: 'underclass',
      politicalView: 'far left',
      hobbies: [ 'painting', 'backpacking' ],
      alignment: 'chaotic neutral',
      summary: 'Victoria "Vic" Anderson, 44, is a cop with a penchant for painting, and backpacking. Her humble, and curious traits makes her a magnet for camaraderie. Although traces of impatient, perfectionistic, and spontaneous traits occasionally surface.\n' +
         '\n' +
         'Hailing from Brazil, Victoria takes pride in her Latin american heritage. She excels in her field of work as cop, drawing from her impatient nature.\n' +
         '\n' +
         'Physically, Victoria is muscular and stands at 1.87m with 71.95 kg. She has jet black braids hair and gray eyes.'
   }
   ```

You can can also use modules to retrieve specific details.

**Generating a random surname**

```javascript
const surnamesModule = new SurnamesModule();
const surname = surnamesModule.getRandomSurname();

console.log(surname);
```

## Contributing

Contributions are welcome! If you'd like to improve this package or add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
