import { words } from "./words";

function getRandomIndex(array: string[]): number {
  const randomIndex: number = Math.floor(Math.random() * array.length);
  return randomIndex;
}

export function getFarewellText(language: string): string {
  const options: string[] = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `RIP, ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}`,
    `Gone but not forgotten, ${language}`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];

  return options[getRandomIndex(options)];
}

export function getRandomWord(): string {
  return words[getRandomIndex(words)];
}
