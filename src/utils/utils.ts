import path = require("path");
import fs = require("fs");

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// TODO: Implement multi locale
Array.prototype.formattedJoin = function () {
  if (this.length > 1) {
    return this.join(", ").replace(/, ([^,]*)$/, ", and $1");
  } else if (this.length === 1) {
    return this[0];
  }

  return "";
};

export function weightedRandom(items: any[], weights: number[]): any {
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const randomValue = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  for (let index = 0; index < items.length; index++) {
    cumulativeWeight += weights[index];

    if (randomValue <= cumulativeWeight) {
      return items[index];
    }
  }

  return items[items.length - 1];
}
