import { useState } from "react";
import KeyboardLetter from "./KeyboardLetter";

export default function Keyboard() {
  const [clickedButtons, setClickedButtons] = useState([]);
  function handleClick(event) {
    const el = event.currentTarget.value;
    setClickedButtons((prev) => [...prev, el]);
    console.log(clickedButtons);
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetElement = alphabet
    .split("")
    .map((item) => (
      <KeyboardLetter key={item} handleClick={handleClick} item={item} />
    ));

  return (
    <section className="flex gap-2 flex-wrap justify-center">
      {alphabetElement}
    </section>
  );
}
