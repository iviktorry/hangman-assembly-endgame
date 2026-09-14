import Keyboard from "./Keyboard";
import Header from "./Header";
import Languages from "./Languages";
import Status from "./Status";
import Word from "./Word";
import NewGameButton from "./NewGameButton";
import { useState } from "react";
import { languages } from "../languages";
import Confetti from "react-confetti";
import { getFarewellText } from "../utils.js";

export default function Main() {
  const wordsArray = ["react", "library", "elephant", "telephone"];

  const [word, setWord] = useState(
    () => wordsArray[Math.floor(Math.random() * wordsArray.length)],
  );
  const [clickedLetters, setClickedLetters] = useState([]);

  const wrongGuessCounter = clickedLetters.filter(
    (item) => !word.includes(item),
  ).length;
  const isGameLost = languages.length - 1 <= wrongGuessCounter;
  const isGameWon = word
    .split("")
    .every((item) => clickedLetters.includes(item));
  const gameOver = isGameWon || isGameLost;

  const lastGuessedLetter = clickedLetters[clickedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !word.includes(lastGuessedLetter);

  const farewellText =
    wrongGuessCounter && getFarewellText(languages[wrongGuessCounter - 1].name);

  return (
    <main className="max-w-xl flex flex-col items-center gap-6 mx-auto overflow-hidden">
      {isGameWon && <Confetti className="fixed top-0 left-0 h-full w-full" />}
      <div className="max-w-md w-full flex flex-col items-center gap-6">
        <Header />
        <Status
          gameOver={gameOver}
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          farewellText={farewellText}
          wrongGuessCounter={wrongGuessCounter}
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
        clickedLetters={clickedLetters}
        word={word}
        gameOver={gameOver}
        lastGuessedLetter={lastGuessedLetter}
        wrongGuessCounter={wrongGuessCounter}
      />
      {gameOver && (
        <NewGameButton
          setClickedLetters={setClickedLetters}
          setWord={setWord}
          wordsArray={wordsArray}
          wrongGuessCounter={wrongGuessCounter}
        />
      )}
    </main>
  );
}
