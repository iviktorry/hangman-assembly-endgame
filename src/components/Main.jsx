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

  let farewellText;
  if (wrongGuessCounter !== 0) {
    farewellText = getFarewellText(languages[wrongGuessCounter - 1].name);
  }

  return (
    <main className="max-w-xl flex flex-col items-center gap-8 mx-auto overflow-hidden">
      {isGameWon && <Confetti />}
      <div className="max-w-md w-full flex flex-col items-center gap-8">
        <Header />
        <Status
          gameOver={gameOver}
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          farewellText={farewellText}
          wrongGuessCounter={wrongGuessCounter}
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
