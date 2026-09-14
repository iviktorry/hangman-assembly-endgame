export default function Word({ word, clickedLetters, isGameLost }) {
  const wordArray = word.split("").map((item, index) => {
    return (
      <span
        key={index}
        className={`w-9 h-9 md:w-12 md:h-12 text-xl uppercase min-w-0 shrink flex items-center justify-center font-semibold rounded-xs bg-neutral-700 border-b-3  ${isGameLost ? (clickedLetters.includes(item) ? "" : "text-red-500") : "text-white"}`}
      >
        {isGameLost ? item : clickedLetters.includes(item) ? item : ""}
      </span>
    );
  });
  return (
    <section className="flex w-full justify-center gap-1">
      {wordArray}
      <p className="sr-only">
        Current word:{" "}
        {word
          .split("")
          .map((item) => (clickedLetters.includes(item) ? `${item}.` : "blank."))}
      </p>
    </section>
  );
}
