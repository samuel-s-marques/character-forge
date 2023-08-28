# [character-forge](https://www.npmjs.com/package/character-forge)

A powerful NPM package for generating procedural characters with randomized attributes like name, surname, sex, gender, personality traits and more.

## Features

CharacterForge offers an extensive list of attributes that can be customized to create well-rounded characters:

- Names: Generates first names, nicknames, and surnames
- Physical Appearance: Generates sex, age, hair color, eye color, hair style, body type, height, and weight to create a vivid visual representation.
- Clothing: Generates the character's clothing style and attire.
- Background: Generates ethnicity, sexuality, marital status, and occupation for a comprehensive background story.
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
      name: 'Daniel',
      nickname: 'Dan',
      surname: 'Wilson',
      sex: 'male',
      age: 48,
      hairColor: 'brunette',
      eyeColor: 'violet',
      hairStyle: 'curly',
      bodyType: {
         type: 'chubby',
         height: 1.7325255971397844,
         weight: 119.84829717036985
      },
      clothings: {
         headwear: 'bowler hat',
         outerwear: 'ski jacket',
         upperbody: 'cardigan',
         lowerbody: 'work pants',
         footwear: 'boat shoes',
         accessories: []
      },
      ethnicity: 'arab',
      sexuality: 'gay',
      maritalStatus: 'widowed',
      occupation: 'runner',
      phobia: undefined,
      personalityTraits: [ 'passive', 'disorganized', 'pratical', 'ambitious', 'stubborn' ],
      socialClass: 'underclass',
      politicalView: 'center-right',
      hobbies: [ 'mountain biking', 'reading' ],
      alignment: 'neutral evil'
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
