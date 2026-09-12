export default function Word({ word, clickedLetters }) {
  const wordArray = word.split("").map((item, index) => {
    return (
      <span
        key={index}
        className="w-9 h-9 md:w-12 md:h-12 text-xl uppercase min-w-0 shrink flex items-center justify-center rounded-xs bg-neutral-700 border-b-2"
      >
        {clickedLetters.includes(item) ? item : ""}
      </span>
    );
  });
  return <section className="flex w-full justify-center gap-1">{wordArray}</section>;
}
