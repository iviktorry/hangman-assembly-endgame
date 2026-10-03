import type { JSX } from "react";

type WordProps = {
  word: string;
  clickedLetters: string[];
  isGameLost: boolean;
};

export default function Word({
  word,
  clickedLetters,
  isGameLost,
}: WordProps): JSX.Element {
  const wordArray: JSX.Element[] = word
    .split("")
    .map((item: string, index: number) => {
      return (
        <span
          key={index}
          className={`flex h-9 w-9 min-w-0 shrink items-center justify-center rounded-xs border-b-3 bg-neutral-700 text-xl font-semibold uppercase md:h-12 md:w-12 ${isGameLost ? (clickedLetters.includes(item) ? "" : "text-red-500") : "text-white"}`}
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
          .map((item: string): string =>
            clickedLetters.includes(item) ? `${item}.` : "blank.",
          )}
      </p>
    </section>
  );
}
