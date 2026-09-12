import LetterButton from "./LetterButton";

export default function Alphabet() {
  function handleClick(event) {
    const el = event.currentTarget.value;
    console.log(el);
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetElement = alphabet
    .split("")
    .map((item) => (
      <LetterButton key={item} handleClick={handleClick} item={item} />
    ));

  return (
    <section className="flex gap-2 flex-wrap justify-center">
      {alphabetElement}
    </section>
  );
}
