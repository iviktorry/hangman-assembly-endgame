import KeyboardLetter from "./KeyboardLetter";

export default function Keyboard({ setClickedLetters, clickedLetters, style }) {
  function handleClick(item) {
    setClickedLetters((prev) => (prev.includes(item) ? prev : [...prev, item]));
    console.log(clickedLetters);
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetElement = alphabet
    .split("")
    .map((item) => (
      <KeyboardLetter
        key={item}
        handleClick={() => handleClick(item)}
        item={item}
        style={style}
      />
    ));

  return (
    <section className="flex gap-2 flex-wrap justify-center">
      {alphabetElement}
    </section>
  );
}
