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
    format(): string;
  }
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.format = function () {
  const substrings = this.split("_");
  return substrings.map((substring) => substring.capitalize()).join("");
};
