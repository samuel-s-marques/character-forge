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
      name: 'William',
      nickname: 'Will',
      surname: 'Gonzalez',
      sex: 'male',
      pronouns: {
         subjectPronoun: 'he',
         objectPronoun: 'him',
         possessiveAdjective: 'his',
         possessivePronoun: 'his'
      },
      age: 44,
      hairColor: 'silver',
      eyeColor: 'amber',
      hairStyle: 'dreadlocks',
      bodyType: {
         type: 'slim',
         height: 1.972212617751488,
         weight: 62.18057860459511
      },
      clothings: {
         headwear: undefined,
         outerwear: undefined,
         upperbody: 'tank top',
         lowerbody: 'joggers',
         footwear: 'chelsea boots',
         accessories: []
      },
      ethnicity: 'south asian',
      birthplace: 'Sri Lanka',
      sexuality: {
         sexuality: 'bissexual',
         relationshipStatus: 'single',
         pastPartners: 5,
         seriousRelationship: 2,
         relationshipHistory: [
            {
            partner: { name: 'Zachary', surname: 'Garcia', age: 50 },
            nature: 'serious',
            duration: 'short-term'
            },
            {
            partner: { name: 'Isabella', surname: 'Davis', age: 39 },
            nature: 'serious',
            duration: 'long-term'
            },
            {
            partner: { name: 'Kevin', surname: 'Williams', age: 21 },
            nature: 'serious',
            duration: 'short-term'
            },
            {
            partner: { name: 'Felix', surname: 'Jackson', age: 47 },
            nature: 'serious',
            duration: 'long-term'
            },
            {
            partner: { name: 'Abigail', surname: 'Johnson', age: 20 },
            nature: 'casual',
            duration: 'short-term'
            }
         ]
      },
      occupation: 'doctor',
      phobia: undefined,
      personalityTraits: [
         {
            name: 'arrogant',
            type: 'negative',
            contradictions: [ 'humble' ]
         },
         {
            name: 'apathetic',
            type: 'negative',
            contradictions: [ 'empathetic' ]
         },
         {
            name: 'accepting',
            type: 'positive',
            contradictions: [ 'accepting' ]
         },
         {
            name: 'lethargic',
            type: 'negative',
            contradictions: [ 'energetic' ]
         },
         {
            name: 'trusting',
            type: 'positive',
            contradictions: [ 'cynical' ]
         }
      ],
      socialClass: 'working class',
      politicalView: 'left',
      hobbies: [ 'cycling', 'snorkeling', 'photography' ],
      alignment: 'lawful evil',
      summary: 'William "Will" Gonzalez, a 44-year-old doctor, finds fulfillment in cycling, snorkeling, and photography. He exudes accepting, and trusting traits. Although occasional arrogant, apathetic, and lethargic traits tendencies arise.\n' +
         '\n' +
         'Hailing from Sri Lanka, William takes pride in his South asian heritage. His journey as doctor is colored by his experiences.\n' +
         '\n' +
         'In terms of appearance, William boasts a slim frame with 62.18 kg, and stands at 1.97m. His silver dreadlocks hair is usually neatly combed, complementing his amber eyes.'
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
