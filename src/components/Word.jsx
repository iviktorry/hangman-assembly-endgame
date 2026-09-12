export default function Word({ word, clickedLetters }) {
  const wordArray = word.split("").map((item, index) => {
    return (
      <span
        key={index}
        className="text-xl uppercase w-12 h-12 flex items-center justify-center rounded-xs bg-neutral-700 border-b-2"
      >
        {clickedLetters.includes(item) ? item : ""}
      </span>
    );
  });
  return <section className="flex gap-1">{wordArray}</section>;
}
