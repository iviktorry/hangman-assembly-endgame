import KeyboardLetter from "./KeyboardLetter";

export default function Keyboard({
  setClickedLetters,
  clickedLetters,
  word,
  gameOver
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
      style = "bg-green-300";
    } else if (isWrong) {
      style = "bg-red-300";
    } else {
      style = "bg-yellow-300";
    }

    return (
      <KeyboardLetter
        key={item}
        handleClick={() => handleClick(item)}
        item={item}
        clickedLetters={clickedLetters}
        style={style}
        gameOver={gameOver}
      />
    );
  });

  return (
    <section className="flex gap-1 md:gap-2 flex-wrap justify-center">
      {alphabetElement}
    </section>
  );
}
