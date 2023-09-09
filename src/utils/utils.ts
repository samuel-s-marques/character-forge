import path = require("path");
import fs = require("fs");
import { splitmix32 } from "./splitmix32";

export function generateRandomNumber(
  min: number,
  max: number,
  seed?: number
): number {
  const rng = new splitmix32(seed);
  return Math.floor(rng.random() * (max - min + 1)) + min;
}

/**
 * Process a JSON file located in a specific directory.
 *
 * This function reads the contents of a JSON file located at a specified path
 * and parses it into a JavaScript object.
 *
 * @param file - The name of the JSON file (without the extension) to be processed.
 * @returns The JavaScript object parsed from the JSON file.
 *
 * @example
 * const fileName = "example";
 * const processedData = processFile(fileName);
 * // Returns the parsed JavaScript object from the JSON file.
 */
export function processFile(file: string): any {
  const filePath = path.join(__dirname, `../../data/${file}/${file}_en.json`);
  const rawData = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(rawData);
}

declare global {
  interface String {
    capitalize(): string;
  }

  interface Array<T> {
    formattedJoin(): string;
  }
}

/**
 * Custom method added to the String prototype for capitalizing the first letter of a string.
 *
 * This method capitalizes the first character of the string while preserving the rest of the string.
 *
 * @returns {string} - A new string with the first letter capitalized.
 * @example
 * const inputString = "hello, world!";
 * const capitalizedString = inputString.capitalize();
 * // Returns "Hello, world!"
 *
 * const anotherString = "example";
 * const capitalizedAnotherString = anotherString.capitalize();
 * // Returns "Example"
 */
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * Custom method added to the Array prototype for formatting and joining its elements.
 *
 * This method joins the elements of the array into a single string with custom formatting:
 * - If the array contains more than one element, it joins them with commas and replaces the last comma
 *   with "and" for a grammatically correct list.
 * - If the array contains exactly one element, it returns that element as is.
 * - If the array is empty, it returns an empty string.
 *
 * @returns A formatted and joined string representation of the array elements.
 * @example
 * const fruits = ["apple", "banana", "cherry"];
 * const formattedString = fruits.formattedJoin();
 * // Returns "apple, banana, and cherry"
 *
 * const singleElementArray = ["orange"];
 * const singleElementString = singleElementArray.formattedJoin();
 * // Returns "orange"
 *
 * const emptyArray = [];
 * const emptyString = emptyArray.formattedJoin();
 * // Returns ""
 */
Array.prototype.formattedJoin = function () {
  if (this.length > 1) {
    return this.join(", ").replace(/, ([^,]*)$/, ", and $1");
  } else if (this.length === 1) {
    return this[0];
  }

  return "";
};

/**
 * Returns a weighted random selection from a list of items based
 * on their respective weights.
 *
 * @param items - An array of items to choose from
 * @param weights - An array of numeric weights corresponding to
 *                  each item in the `items` array.
 *                  The sum of all weights should be greater than
 *                  zero.
 *
 * @returns A randomly selected item from the `items` array, with
 * a probability of selection determined by its weight.
 */
export function weightedRandom(items: any[], weights: number[], seed?: number): any {
  const rng = new splitmix32(seed);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const randomValue = rng.random() * totalWeight;
  let cumulativeWeight = 0;

  for (let index = 0; index < items.length; index++) {
    cumulativeWeight += weights[index];

    if (randomValue <= cumulativeWeight) {
      return items[index];
    }
  }

  return items[items.length - 1];
}
