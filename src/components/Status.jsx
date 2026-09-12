export default function Status({ gameOver, isGameLost, isGameWon }) {
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
  }

  return (
    <section
      className={`h-17 flex flex-col items-center justify-center text-lg w-full rounded-md ${style}`}
    >
      <p className="text-2xl font-semibold">{title}</p>
      <p>{text}</p>
    </section>
  );
}
