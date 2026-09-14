import KeyboardLetter from "./KeyboardLetter";
import { languages } from "../languages";

export default function Keyboard({
  setClickedLetters,
  clickedLetters,
  word,
  gameOver,
  lastGuessedLetter,
  wrongGuessCounter,
}) {
  function handleClick(item) {
    setClickedLetters((prev) => (prev.includes(item) ? prev : [...prev, item]));
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetElement = alphabet.split("").map((item) => {
    const isGuessed = clickedLetters.includes(item);
    const isCorrect = isGuessed && word.includes(item);
    const isWrong = isGuessed && !word.includes(item);

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
        word={word}
        style={style}
        gameOver={gameOver}
        clickedLetters={clickedLetters}
        handleClick={() => handleClick(item)}
      />
    );
  });

  return (
    <section className="flex gap-1 md:gap-2 flex-wrap justify-center">
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
