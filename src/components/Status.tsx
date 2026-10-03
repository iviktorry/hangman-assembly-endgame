import type { JSX } from "react";

type StatusProps = {
  gameOver: boolean;
  isGameLost: boolean;
  isGameWon: boolean;
  farewellText: string;
  isLastGuessIncorrect: boolean;
};

type getStatusContent = {
  style: string;
  title: string;
  text: string;
};

export default function Status({
  gameOver,
  isGameLost,
  isGameWon,
  farewellText,
  isLastGuessIncorrect,
}: StatusProps): JSX.Element {
  function getStatusContent(): getStatusContent {
    if (gameOver) {
      if (isGameWon) {
        return {
          style: "bg-green-400/50",
          title: "You won!",
          text: "Well done!",
        };
      }
      if (isGameLost) {
        return {
          style: "bg-red-400/50",
          title: "Game over!",
          text: "You lose! Better start learning Assembly",
        };
      }
    }
    if (isLastGuessIncorrect) {
      return {
        style: "bg-purple-400/50 italic",
        title: `${farewellText}`,
        text: "",
      };
    }
    return { style: "", title: "", text: "" };
  }
  const { style, title, text } = getStatusContent();

  return (
    <section
      aria-live="polite"
      role="status"
      className={`flex h-18 w-[92%] flex-col items-center justify-center rounded-sm text-lg md:w-full ${style}`}
    >
      <p className="text-xl font-semibold md:text-2xl">{title}</p>
      <p className="text-base">{text}</p>
    </section>
  );
}
