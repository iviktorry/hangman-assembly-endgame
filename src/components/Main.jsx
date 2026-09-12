import Keyboard from "./Keyboard";
import Header from "./Header";
import Languages from "./Languages";
import Status from "./Status";
import Word from "./Word";
import NewGameButton from "./NewGameButton";
import { useState } from "react";
import { languages } from "../languages";

export default function Main() {
  const [word, setWord] = useState("react");
  const [clickedLetters, setClickedLetters] = useState([]);

  const wrongGuessCounter = clickedLetters.filter(
    (item) => !word.includes(item),
  ).length;
  const isGameLost = languages.length - 1 <= wrongGuessCounter;
  const isGameWon = word
    .split("")
    .every((item) => clickedLetters.includes(item));
  const gameOver = isGameWon || isGameLost;
  console.log(gameOver);

  return (
    <main className="max-w-xl flex flex-col items-center gap-8 mx-auto">
      <div className="max-w-md flex flex-col items-center gap-8">
        <Header />
        <Status
          gameOver={gameOver}
          isGameLost={isGameLost}
          isGameWon={isGameWon}
        />
        <Languages wrongGuessCounter={wrongGuessCounter} />
        <Word word={word} clickedLetters={clickedLetters} />
      </div>
      <Keyboard
        setClickedLetters={setClickedLetters}
        clickedLetters={clickedLetters}
        word={word}
      />
      {gameOver && <NewGameButton setClickedLetters={setClickedLetters} />}
    </main>
  );
}
