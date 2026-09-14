export default function Status({
  gameOver,
  isGameLost,
  isGameWon,
  farewellText,
  isLastGuessIncorrect,
}) {
  let style, title, text;

  if (gameOver) {
    if (isGameWon) {
      style = "bg-green-400/50";
      title = "You won!";
      text = "Well done!";
    } else if (isGameLost) {
      style = "bg-red-400/50";
      title = "Game over!";
      text = "You lose! Better start learning Assembly";
    }
  } else if (isLastGuessIncorrect) {
    title = `${farewellText}`;
    style = "bg-purple-400/50 italic";
  }

  return (
    <section
      className={`h-14 md:h-18 flex flex-col items-center justify-center text-lg w-full rounded-sm ${style}`}
    >
      <p className="text-xl md:text-2xl font-semibold">{title}</p>
      <p className="text-base">{text}</p>
    </section>
  );
}
