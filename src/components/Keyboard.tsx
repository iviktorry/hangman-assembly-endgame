import KeyboardLetter from "./KeyboardLetter";
import { languages } from "../languages";
import type { JSX } from "react";
import { Dispatch, SetStateAction } from "react";

type KeyboardProps = {
  setClickedLetters: Dispatch<SetStateAction<string[]>>;
  gameOver: boolean;
  clickedLetters: string[];
  word: string;
  lastGuessedLetter: string;
  wrongGuessCounter: number;
};

export default function Keyboard({
  setClickedLetters,
  gameOver,
  clickedLetters,
  word,
  lastGuessedLetter,
  wrongGuessCounter,
}: KeyboardProps): JSX.Element {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addClickedLetters(letter: string): void {
    setClickedLetters((prev: string[]): string[] =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  const alphabetElement = alphabet.split("").map((item) => {
    const isGuessed: boolean = clickedLetters.includes(item);
    const isCorrect: boolean = isGuessed && word.includes(item);
    const isWrong: boolean = isGuessed && !word.includes(item);

    let style;
    if (isCorrect) {
      style = "bg-green-400";
    } else if (isWrong) {
      style = "bg-red-500";
    } else {
      style = "bg-amber-200";
    }

    return (
      <KeyboardLetter
        key={item}
        item={item}
        style={style}
        gameOver={gameOver}
        clickedLetters={clickedLetters}
        handleClick={() => addClickedLetters(item)}
      />
    );
  });

  return (
    <section className="flex flex-wrap justify-center gap-1 md:gap-2">
      {alphabetElement}
      <p className="sr-only">
        {word.includes(lastGuessedLetter)
          ? `Correct, letter ${lastGuessedLetter} is in the word.`
          : `Ops, letter ${lastGuessedLetter} is not in the word`}
        You have {languages.length - 1 - wrongGuessCounter} attempts left.
      </p>
    </section>
  );
}
