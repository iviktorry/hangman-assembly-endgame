import { words } from "./words";

export function getFarewellText(language) {
  const options = [
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

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
