import Keyboard from "./Keyboard";
import Header from "./Header";
import Languages from "./Languages";
import Status from "./Status";
import Word from "./Word";
import NewGameButton from "./NewGameButton";
import { useState } from "react";

export default function Main() {
  const [word, setWord] = useState("react");
  const [clickedLetters, setClickedLetters] = useState([]);

  return (
    <main className="max-w-xl flex flex-col items-center gap-10 mx-auto">
      <div className="max-w-md flex flex-col items-center gap-10">
        <Header />
        <Status />
        <Languages />
        <Word word={word} />
      </div>
      <Keyboard
        clickedLetters={clickedLetters}
        setClickedLetters={setClickedLetters}
        word={word}
      />
      <NewGameButton />
    </main>
  );
}
