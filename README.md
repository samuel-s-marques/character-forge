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
      seed: 0.45064322790130973,
      name: 'Olivia',
      nickname: 'Liv',
      surname: 'Garcia',
      sex: 'female',
      pronouns: {
         subjectPronoun: 'she',
         objectPronoun: 'her',
         possessiveAdjective: 'her',
         possessivePronoun: 'hers'
      },
      age: 33,
      hairColor: 'mahogany',
      eyeColor: 'blue',
      hairStyle: 'undercut',
      bodyType: {
         type: 'chubby',
         height: 1.6057030973606743,
         weight: 88.69564021937549
      },
      clothings: {
         headwear: undefined,
         outerwear: 'ski jacket',
         upperbody: 'sweatshirt',
         lowerbody: 'corduroy pants',
         footwear: 'flip-flops',
         accessories: []
      },
      ethnicity: 'east asian',
      skinTone: 'light',
      birthplace: 'South Korea',
      religion: 'buddhism',
      sexuality: {
         sexuality: 'asexual',
         relationshipStatus: 'single',
         pastPartners: 2,
         seriousRelationship: 4,
         relationshipHistory: [
            {
             partner: { name: 'Ava', surname: 'Johnson', age: 35 },
             nature: 'serious',
             duration: 'short-term'
            },
            {
              partner: { name: 'Benjamin', surname: 'Martin', age: 33 },
              nature: 'serious',
              duration: 'short-term'
            }
         ]
      },
      occupation: 'cleaner',
      phobia: undefined,
      personalityTraits: [
         {
            name: 'disorganized',
            type: 'negative',
            contradictions: [ 'organized' ]
         },
         {
            name: 'intuitive',
            type: 'positive',
            contradictions: [ 'analytic' ]
         },
         {
            name: 'confident',
            type: 'positive',
            contradictions: [ 'insecure' ]
         },
         {
            name: 'humble',
            type: 'positive',
            contradictions: [ 'arrogant' ]
         },
         {
            name: 'open-minded',
            type: 'positive',
            contradictions: [ 'closed-minded' ]
         }
      ],
      socialClass: 'underclass',
      politicalView: 'center',
      hobbies: [ 'chess', 'baking', 'backpacking' ],
      alignment: 'lawful neutral',
      summary: 'Olivia "Liv" Garcia, 33, is a cleaner with a penchant for chess, baking, and backpacking. She radiates intuitive, confident, humble, and open-minded traits.     A touch of disorganized traits surfaces now and then.\n' +
         '\n' +
         'Hailing from South Korea, Olivia takes pride in her East asian heritage. Her role as cleaner sheds light on her perspectives.\n' +
         '\n' +
         'Physically, Olivia is chubby and stands at 1.61m with 88.70 kg. She has mahogany undercut hair and blue eyes.'
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
