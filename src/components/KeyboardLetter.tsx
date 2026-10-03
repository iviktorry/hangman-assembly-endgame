import type { JSX } from "react";

type KeyboardLetterProps = {
  handleClick: () => void;
  item: string;
  style: string;
  gameOver: boolean;
  clickedLetters: string[];
};
export default function KeyboardLetter({
  handleClick,
  item,
  style,
  gameOver,
  clickedLetters,
}: KeyboardLetterProps): JSX.Element {
  return (
    <button
      onClick={handleClick}
      value={item}
      disabled={gameOver}
      aria-label={`Letter ${item}`}
      aria-disabled={clickedLetters.includes(item)}
      className={`flex h-11 w-9 cursor-pointer items-center justify-center rounded-xs text-xl font-bold text-neutral-800 uppercase disabled:opacity-30 md:h-12 md:w-12 md:rounded-sm ${style}`}
    >
      {item}
    </button>
  );
}
