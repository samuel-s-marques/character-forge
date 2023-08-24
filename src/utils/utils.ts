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
