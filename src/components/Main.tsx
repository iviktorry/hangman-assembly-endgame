import Keyboard from "./Keyboard.tsx";
import Header from "./Header.tsx";
import Languages from "./Languages.tsx";
import Status from "./Status.tsx";
import Word from "./Word.tsx";
import NewGameButton from "./NewGameButton.tsx";
import { useState } from "react";
import { languages } from "../languages.ts";
import Confetti from "react-confetti";
import { getFarewellText, getRandomWord } from "../utils.ts";
import type { JSX } from "react";

export default function Main(): JSX.Element {
  const [word, setWord] = useState<string>((): string => getRandomWord());
  const [clickedLetters, setClickedLetters] = useState<string[]>([]);

  const wrongGuessCounter: number = clickedLetters.filter(
    (item: string): boolean => !word.includes(item),
  ).length;
  const isGameWon: boolean = word
    .split("")
    .every((item: string): boolean => clickedLetters.includes(item));
  const isGameLost: boolean = languages.length - 1 <= wrongGuessCounter;
  const gameOver: boolean = isGameWon || isGameLost;

  const lastGuessedLetter: string = clickedLetters[clickedLetters.length - 1];
  const isLastGuessIncorrect: boolean =
    Boolean(lastGuessedLetter) && !word.includes(lastGuessedLetter);

  const farewellText: string =
    wrongGuessCounter > 0
      ? getFarewellText(languages[wrongGuessCounter - 1].name)
      : "";

  function handleGameReset(): void {
    setClickedLetters([]);
    setWord(() => getRandomWord());
  }

  return (
    <main className="mx-auto flex max-w-xl flex-col items-center gap-10 overflow-hidden md:gap-8">
      {isGameWon && <Confetti className="fixed top-0 left-0 h-full w-full" />}
      <div className="flex w-full max-w-md flex-col items-center gap-10 md:gap-8">
        <Header />
        <Status
          gameOver={gameOver}
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          farewellText={farewellText}
          isLastGuessIncorrect={isLastGuessIncorrect}
        />
        <Languages wrongGuessCounter={wrongGuessCounter} />
        <Word
          word={word}
          clickedLetters={clickedLetters}
          isGameLost={isGameLost}
        />
      </div>
      <Keyboard
        setClickedLetters={setClickedLetters}
        word={word}
        gameOver={gameOver}
        clickedLetters={clickedLetters}
        lastGuessedLetter={lastGuessedLetter}
        wrongGuessCounter={wrongGuessCounter}
      />
      {gameOver && <NewGameButton handleReset={handleGameReset} />}
    </main>
  );
}
