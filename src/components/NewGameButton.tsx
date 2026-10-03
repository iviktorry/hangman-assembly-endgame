import type { JSX } from "react";

type NewGameButtonProps = {
  handleReset: () => void;
};

export default function NewGameButton({
  handleReset,
}: NewGameButtonProps): JSX.Element {
  return (
    <button
      onClick={handleReset}
      className="text-semibold w-full max-w-56 cursor-pointer rounded-md bg-blue-400 py-3 text-xl"
    >
      New game
    </button>
  );
}
